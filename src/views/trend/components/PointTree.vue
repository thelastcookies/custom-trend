<script setup lang="ts">
import type { Key, Recordable } from '@/types';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/vc-tree/interface';
import type { TreeNode as TreeNodeType } from '@/utils/tree';
import type { TagConstructRecord } from '@/api/base/tag/types';
import { Empty, message, type TreeProps } from 'ant-design-vue';

const tags = defineModel<TreeNodeType<TagConstructRecord>[]>('tags', { default: () => [] });

const loading = ref(false);
const fieldNames = ref({ children: 'children', title: 'description', key: 'id' });
const selectedKeys = ref<(Key)[]>([]);
const checkedKeys = ref<{ checked: Key[]; halfChecked: Key[]; }>({
  checked: [],
  halfChecked: [],
});
const expandedKeys = ref<(Key)[]>([]);
const autoExpandParent = ref<boolean>(true);

// 树全部数据
const tree = ref<TreeNodeType<TagConstructRecord>[]>();
// 树前端筛选结果
const filteredTree = ref<TreeNodeType<TagConstructRecord>[]>();

// 已加载过一次的结构树节点
const alreadyLoaded = ref<(Key)[]>([]);

/**
 * 处理节点被选中
 */
const handleCheck = ({ checked }: any) => {
  tags.value = checked.map((key: Key) => {
    return findTreeNodeById(tree.value!, key)!;
  });
};

watch(tags, () => {
  checkedKeys.value.checked = tags.value.map(tag => tag.getId()!);
});

/**
 * 处理搜索
 */
// 绑定输入框内输入内容
const searchValueInput = ref<string>('');
// 搜索时的输入内容
const searchValue = ref<string>('');
const searchValueFields = computed(() => searchValue.value.split(' ').filter(s => s !== ''));
const searchReg = computed(() => {
  return searchValueFields.value.length ? new RegExp(searchValueFields.value.join('|'), 'g') : undefined;
});

// 监听树数据变化并更新前端筛选结果
watch(tree, () => {
  // filterTree();
  const treeNative = cloneDeep(tree.value);
  filteredTree.value = filterTreeNode(treeNative);
  loading.value = false;
}, {
  deep: true,
});

// 树前端筛选递归方法
const filterTreeNode = (tree: TreeNodeType<TagConstructRecord>[]) => {
  return tree.filter((node) => {
    const children: TreeNodeType<TagConstructRecord>[] = node.children ? filterTreeNode(node.children) : [];
    if (!searchValueFields.value.length || children.length > 0) {
      if (node.hierarchy) node.setChildren(children);
      return true;
    }
    const regRes = node.description.match(searchReg.value);
    return !!(regRes && regRes.length === searchValueFields.value.length);
  });
};

// 触发搜索
const handleSearch = async () => {
  if (!tree.value || !tree.value.length) return;
  if (searchValueInput.value === '') {
    searchValue.value = '';
    filteredTree.value = tree.value;
    return;
  } else {
    loading.value = true;
    await setTreeNodeChildrenByDesc(searchValueInput.value);
  }
};

/**
 * 处理节点展开
 */
const handleExpand = (keys: Key[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
};

/**
 * 获取测点结构树
 */
const fetch = async () => {
  loading.value = true;
  try {
    // todo 发布时注意
    const { data, code } = await getTagConstruct();
    // const { data, code } = getTagConstructMock;
    if (code !== 200) return;
    if (data) {
      tree.value = createTree(listToTree(data.map(d => {
        return { ...d, ...{ selectable: true, checkable: false, page: 0 } };
      }) as any));
      expandedKeys.value = [tree.value[0].getId()!];
    }
  } catch (e) {
    message.error('测点请求失败');
  } finally {
    loading.value = false;
  }
};

fetch();

/**
 * 初次展开结构节点
 */
const handleLoadData: TreeProps['loadData'] = (treeNode: EventDataNode) => {
  return new Promise<void>(async (resolve, reject) => {
    await nextTick(async () => {
      try {
        if (!treeNode.dataRef || treeNode.dataRef.hierarchy !== 2
          || treeNode.children?.length !== 0
          // 判断以防止在 setTreeNodeChildrenByDesc 导致节点初次展开而引起的多余请求
          || alreadyLoaded.value.includes(treeNode.dataRef.id)
        ) {
          resolve();
          return;
        }
        await setTreeNodeChildrenById(treeNode.dataRef.id);
        resolve();
      } catch (e) {
        reject();
      }
    });
  });
};

/**
 * 点击已加载过一次的结构树节点的子节点中加载更多按钮
 * @param id
 */
const handleLoadMore = async (id: string) => {
  await setTreeNodeChildrenById(id);
};

// 动态获取子节点并添加
const setTreeNodeChildrenById = async (id: string) => {
  alertVisible.value = false;
  const treeNative = cloneDeep(tree.value);
  const node = findTreeNodeById(treeNative, id)!;
  const page = node.page + 1;
  const size = 10;
  // todo 发布时注意
  const { data, code } = await getTagPoint({
    size,
    current: page,
    classificationId: node.hierarchy === 2 ? node.getId() : node.classificationId,
    tagdesc: searchValue.value,
  });
  // const { data, code } = getTagPointMock;
  if (code !== 200 || !data || !data.length) {
    return;
  }
  // 组织数据
  const children = data.map(item => {
    return new TreeNode({
      ...item,
      id: item.taglogicid,
      description: item.tagdesc,
      isLeaf: true,
      reload: false,
      selectable: false,
    });
  });

  // 判断是「初次展开」还是「加载更多」，这里的判断条件是被点击节点的层级
  const pNode = node.hierarchy === 2 ? node : findTreeNodeById(treeNative, node?.classificationId!)!;
  const loadMoreId = pNode.getId() + '-load-more';
  const oldChildren = pNode.getChildren()!;
  let uniqueChildren = Array.from(new Map(
    oldChildren.filter(node => node.getId() !== loadMoreId)
    .concat(children).map(item => [item.id, item])).values(),
  );

  // 如果返回内容与页内条数相当，则假定还有未加载的节点
  if (children.length === size)
    uniqueChildren = uniqueChildren.concat(new TreeNode({
      id: loadMoreId,
      classificationId: pNode.getId(),
      description: '加载更多',
      isLeaf: true,
      checkable: false,
      selectable: false,
      reload: true,
      page,
    }));
  pNode?.setChildren(uniqueChildren);
  tree.value = treeNative;
  alreadyLoaded.value = [...alreadyLoaded.value, id];
};

// 根据查询条件获取子节点并添加
const setTreeNodeChildrenByDesc = async (desc: string) => {
  alertVisible.value = false;
  const treeNative = cloneDeep(tree.value);
  try {
    // todo 发布时注意
    const { data, code } = await getTagPoint({
      size: 10000,
      current: 1,
      tagdesc: desc,
      classificationId: selectedKeys.value[0] as number || undefined,
    });
    // const { data, code } = getTagPointByDescMock;
    if (code !== 200 || !data) {
      return;
    }
    // 组织数据
    let idChildrenMap: Recordable<TreeNodeType[]> = {};
    let expKeys: Key[] = [];
    data.forEach(item => {
      const node = new TreeNode({
        ...item,
        id: item.taglogicid,
        description: item.tagdesc,
        isLeaf: true,
        reload: false,
        selectable: false,
      });

      // 遍历返回数据，并将数据组织成 「结构树 id: children」 的形式
      const pId = node.classificationId;
      if (!idChildrenMap[pId]) {
        expKeys.push(pId);
        idChildrenMap[pId] = [node];
        alreadyLoaded.value = [...alreadyLoaded.value, pId];
      } else {
        // 限制单个结构树节点下挂在的子节点。如果单个节点下的节点超过 100，则超出的部分不加载并输出提示
        if (idChildrenMap[pId].length < 100)
          idChildrenMap[pId].push(node);
        else if (alertVisible.value === false) alertVisible.value = true;
      }
    });

    // 遍历组织完成的数据，将子节点分别挂载到结构树节点下
    for (const [id, children] of Object.entries(idChildrenMap)) {
      const pNode = findTreeNodeById(treeNative!, Number(id))!;
      const loadMoreId = pNode.getId() + '-load-more';
      const oldChildren = pNode.getChildren()!;
      const uniqueChildren = Array.from(new Map(
        oldChildren.filter(node => node.getId() !== loadMoreId)
        .concat(children).map(item => [item.id, item])).values(),
      ).concat(new TreeNode({
        id: loadMoreId,
        classificationId: pNode.getId(),
        description: '加载更多',
        isLeaf: true,
        checkable: false,
        selectable: false,
        reload: true,
        page: pNode.page,
      }));
      pNode?.setChildren(uniqueChildren);
    }
    searchValue.value = desc;
    tree.value = treeNative;
    expandedKeys.value = expKeys;
    autoExpandParent.value = true;
  } catch (e) {
    message.error('测点请求失败');
  }
};

const alertVisible = ref(false);

</script>

<template>
  <div class="h-full flex items-start flex-col">
    <a-input-search
      v-model:value="searchValueInput"
      placeholder="可选中树节点以减小搜索范围"
      @search="handleSearch"
    />
    <a-divider my-4 />
    <a-spin wrapperClassName="flex-1 w-full of-y-auto flex" :spinning="loading">
      <a-alert
        v-if="alertVisible"
        message="符合当前搜索条件的测点条目过多，未能全部展示。为了您的使用体验，请尝试减小搜索范围或输入更精准的描述以搜索。"
        type="warning"
        closable
        @close="alertVisible = false"
      />
      <a-tree v-if="filteredTree && filteredTree.length"
        class="w-full flex-1"
        checkable
        checkStrictly
        v-model:selected-keys="selectedKeys"
        v-model:checked-keys="checkedKeys"
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :tree-data="filteredTree as unknown as DataNode[]"
        :field-names="fieldNames"
        :load-data="handleLoadData"
        @check="handleCheck"
        @expand="handleExpand"
      >
        <template #title="{ id, description, reload }">
          <PointTreeNodeLabel :label="description" :query="searchReg" :reload @reload="handleLoadMore(id)" />
        </template>
      </a-tree>
      <a-empty v-else :image="Empty.PRESENTED_IMAGE_SIMPLE"></a-empty>
    </a-spin>
  </div>
</template>
