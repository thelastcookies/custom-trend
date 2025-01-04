<script setup lang="ts">
import type { Key, Recordable } from '@/types';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/vc-tree/interface';
import { TreeNode, type TreeNode as TreeNodeType } from '@/utils/tree';
import type { TagConstructRecord } from '@/api/base/tag/types';
import { message, type TreeProps } from 'ant-design-vue';

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
const tree = ref<TreeNodeType<TagConstructRecord>[]>();

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
const searchValue = ref<string>('');
const search = useDebounceFn(async () => {
  await setTreeNodeChildrenByDesc(searchValue.value);
}, 500);

watch(searchValue, (val) => {
  if (!tree.value || !tree.value.length || !val) return;
  search();
});

const filterTreeNode = (node: EventDataNode) => {
  return searchValue.value ? node.description.indexOf(searchValue.value) > -1 : false;
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
    const { data, code } = await getTagConstruct();
    // todo 发布时删除
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
 * @param treeNode
 */
const handleLoadData: TreeProps['loadData'] = (treeNode: EventDataNode) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      if (!treeNode.dataRef || treeNode.dataRef.hierarchy !== 2 || treeNode.children?.length !== 0) {
        resolve();
        return;
      }
      await setTreeNodeChildrenById(treeNode.dataRef.id);
      resolve();
    } catch (e) {
      reject();
    }
  });
};

/**
 * 点击加载更多
 * @param id
 */
const handleLoadMore = async (id: string) => {
  await setTreeNodeChildrenById(id);
};

// 动态获取子节点并添加
const setTreeNodeChildrenById = async (id: string) => {
  const node = findTreeNodeById(tree.value!, id)!;
  const page = node.page + 1;
  const { data, code } = await getTagPoint({
    size: '10',
    current: String(page),
    classificationId: node.hierarchy === 2 ? node.getId() : node.classificationId,
    tagdesc: searchValue.value,
  });
  // todo 发布时删除
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

  // 根据是否初次加载做不同处理
  // 这里的判断条件是「hierarchy 为 2」
  const pNode = node.hierarchy === 2 ? node : findTreeNodeById(tree.value!, node?.classificationId!)!;
  const loadMoreId = pNode.getId() + '-load-more';
  const oldChildren = pNode.getChildren()!;
  pNode?.setChildren([
    ...oldChildren.filter(node => node.getId() !== loadMoreId),
    ...children.length < 10 ? children : children.concat(new TreeNode({
      id: loadMoreId,
      classificationId: pNode.getId(),
      description: '加载更多',
      isLeaf: true,
      checkable: false,
      selectable: false,
      reload: true,
      page,
    })),
  ]);
};

const setTreeNodeChildrenByDesc = async (desc: string) => {
  loading.value = true;
  try {
    const { data, code } = await getTagPoint({
      size: '10000',
      current: '1',
      tagdesc: desc,
      classificationId: String(selectedKeys.value[0]),
    });
    // todo 发布时删除
    // const { data, code } = getTagPointByDescMock;
    if (code !== 200 || !data || !data.length) {
      return;
    }
    // 组织数据
    // let idChildrenMap = new Map<string, TreeNode[]>();
    let idChildrenMap: Recordable<TreeNode[]> = {};
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
      if (!idChildrenMap[node.classificationId]) {
        expKeys.push(node.classificationId);
        idChildrenMap[node.classificationId] = [node];
      } else {
        // 如果单个节点下的测点超过 100，则不加载并输出提示
        if (idChildrenMap[node.classificationId].length < 100)
          idChildrenMap[node.classificationId].push(node);
        else if (alertVisible.value === false) alertVisible.value = true;
      }
    });

    for (const [id, children] of Object.entries(idChildrenMap)) {
      const pNode = findTreeNodeById(tree.value!, Number(id))!;
      const loadMoreId = pNode.getId() + '-load-more';
      const oldChildren = pNode.getChildren()!;
      let noDuplicateChildren = Array.from(new Set([
        ...oldChildren.filter(node => node.getId() !== loadMoreId),
        ...children,
      ])).concat(new TreeNode({
        id: loadMoreId,
        classificationId: pNode.getId(),
        description: '加载更多',
        isLeaf: true,
        checkable: false,
        selectable: false,
        reload: true,
        page: pNode.page,
      }));
      pNode?.setChildren(noDuplicateChildren);
    }
    expandedKeys.value = expKeys;
    autoExpandParent.value = true;
  } catch (e) {
    message.error('测点请求失败');
  } finally {
    loading.value = false;
  }
};

const alertVisible = ref(false);

</script>

<template>
  <div class="h-full flex items-start flex-col">
    <a-input-search v-model:value="searchValue" placeholder="可选中树节点以减小搜索范围" />
    <a-divider my-4 />
    <a-spin wrapperClassName="h-[calc(100%-65px)] w-full of-y-auto" :spinning="loading">
      <a-alert
        v-if="alertVisible"
        message="符合当前搜索条件的测点条目过多，未能全部展示。为了您的使用体验，请尝试减小搜索范围或输入更精准的描述以搜索。"
        type="warning"
        closable
        @close="alertVisible = false"
      />
      <a-tree
        class="w-full flex-1"
        checkable
        checkStrictly
        v-model:selected-keys="selectedKeys"
        v-model:checked-keys="checkedKeys"
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        :tree-data="tree as unknown as DataNode[]"
        :field-names="fieldNames"
        :filter-tree-node="filterTreeNode"
        :load-data="handleLoadData"
        @check="handleCheck"
        @expand="handleExpand"
      >
        <template #title="{ id, description, reload }">
          <div class="flex tree-node-title">
            <div v-if="description && searchValue && description.indexOf(searchValue) > -1">
              {{ description.substring(0, description.indexOf(searchValue)) }}
              <span class="c-ant.error">{{ searchValue }}</span>
              {{ description.substring(description.indexOf(searchValue) + searchValue.length) }}
            </div>
            <div v-else-if="reload" class="c-ant.link" @click="handleLoadMore(id)">
              <BaseIcon class="mr-2" icon="i-mdi-reload" />
              <span class="">{{ description }}</span>
            </div>
            <div v-else>{{ description }}</div>
          </div>
        </template>
      </a-tree>
    </a-spin>
  </div>
</template>
