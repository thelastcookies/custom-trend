<script setup lang="ts">
import type { Key } from '@/types';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/vc-tree/interface';
import { TreeNode, type TreeNode as TreeNodeType } from '@/utils/tree';
import type { TagConstructRecord } from '@/api/base/tag/types';
import type { TreeProps } from 'ant-design-vue';
import { createTree, findTreeNodeById, listToTree } from '@/utils/tree/utils.ts';

const tags = defineModel<TreeNodeType<TagConstructRecord>[]>('tags', { default: () => [] });

const loading = ref(false);
const fieldNames = ref({ children: 'children', title: 'description', key: 'id' });
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
const search = useDebounceFn(() => {
  console.log(tags);
  // todo 发布时删除
  // const { data, code } = await getTagPoint({
  //   tagdesc: value,
  // });
  // const { data, code } = getTagPointMock;

  // const nodes = findTreeNodesByLabel(tree.value, value);
  // expandedKeys.value = nodes.map(node => node.getId()) as Key[];
  // autoExpandParent.value = true;
}, 500);

watch(searchValue, () => {
  if (!tree.value || !tree.value.length) return;
  search();
});

const filterTreeNode = (node: EventDataNode) => {
  return searchValue.value ? node.desctrption.indexOf(searchValue.value) > -1 : false;
};

/**
 * 处理节点展开
 */
const handleExpand = (keys: Key[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
};

/**
 * 数据获取
 */
const fetch = async () => {
  loading.value = true;
  // todo 发布时删除
  const { data, code } = await getTagConstruct();
  // const { data, code } = getTagConstructMock;
  if (code !== 200) return;

  if (data) {
    tree.value = createTree(listToTree(data.map(d => {
      return {
        ...d,
        ...{
          checkable: false,
          page: 0,
        },
      };
    }) as any));
    expandedKeys.value = [tree.value[0].getId()!];
  }
  loading.value = false;
};

fetch();

const handleLoadData: TreeProps['loadData'] = (treeNode: EventDataNode) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      if (!treeNode.dataRef || treeNode.dataRef.hierarchy !== 2) {
        resolve();
        return;
      }
      await setTreeNodeChildren(treeNode.dataRef.id);
      resolve();
    } catch (e) {
      reject();
    }
  });
};

const handleLoadMore = async (id: string) => {
  await setTreeNodeChildren(id);
};

// 动态获取子节点并添加
const setTreeNodeChildren = async (id: string) => {
  const node = findTreeNodeById(tree.value!, id)!;
  const page = node.page + 1;
  // todo 发布时删除
  // const { data, code } = getTagPointMock;
  const { data, code } = await getTagPoint({
    size: '10',
    current: String(page),
    classificationId: node.hierarchy === 2 ? node.getId() : node.classificationId,
  });
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
      reload: true,
      page,
    })),
  ]);
};

</script>

<template>
  <div class="h-full flex items-start flex-col">
    <a-input-search v-model:value="searchValue" placeholder="搜索" />
    <a-divider my-4 />
    <a-spin wrapperClassName="h-[calc(100%-65px)] w-full of-y-auto" :spinning="loading">
      <a-tree
        class="w-full flex-1"
        checkable
        checkStrictly
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
