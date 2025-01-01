<script setup lang="ts">
import type { Key } from '@/types';
import type { DataNode, EventDataNode } from 'ant-design-vue/es/vc-tree/interface';
import type { TreeNode as TreeNodeType } from '@/utils/tree';
import type { TagConstructRecord } from '@/api/base/tag/types';
import type { TreeProps } from 'ant-design-vue';
import { createTree, findTreeNodeById, listToTree } from '@/utils/tree/utils.ts';

const value = defineModel<TreeNodeType<TagConstructRecord>[]>('value', { default: () => [] });
const checkedKeys = defineModel<{
  checked: Key[];
  halfChecked: Key[];
}>('checkedKeys', {
  default: () => {
    return {
      checked: [],
      halfChecked: [],
    };
  },
});

const props = withDefaults(defineProps<{
  defaultExpandAll?: boolean;
}>(), {
  defaultExpandAll: false,
});

const emit = defineEmits<{
  (e: 'add'): void;
}>();


const loading = ref(false);
const fieldNames = { children: 'children', title: 'description', key: 'id' };
const expandedKeys = ref<(Key)[]>([]);
const autoExpandParent = ref<boolean>(true);
const tree = ref<TreeNodeType<TagConstructRecord>[]>();

/**
 * 数据获取
 */
const fetch = async () => {
  loading.value = true;
  // const { data, code } = await getTagConstruct();
  const { data, code } = getTagConstructMock;
  if (code !== 200) return;

  if (data) tree.value = createTree(listToTree(data as any));
  loading.value = false;
};

fetch();

/**
 * 处理节点被选中
 */
watchEffect(() => {
  if (!tree.value || !tree.value.length) return;
  if (props.defaultExpandAll) {
    const list = treeToList(tree.value);
    expandedKeys.value = list.map(it => it.getId()!);
  }
  value.value = checkedKeys.value.checked?.map(key => {
    return findTreeNodeById(tree.value!, key)!;
  });
});

/**
 * 处理搜索
 */
const searchValue = ref<string>('');
watch(searchValue, value => {
  if (!tree.value || !tree.value.length) return;
  const nodes = findTreeNodesByLabel(tree.value, value);
  expandedKeys.value = nodes.map(node => node.getId()) as Key[];
  autoExpandParent.value = true;
});

const onExpand = (keys: Key[]) => {
  expandedKeys.value = keys;
  autoExpandParent.value = false;
};

const filterTreeNode = (node: EventDataNode) => {
  return searchValue.value ? node.Name.indexOf(searchValue.value) > -1 : false;
};

const onLoadData: TreeProps['loadData'] = (treeNode: EventDataNode) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      if (!treeNode.dataRef || treeNode.dataRef.hierarchy !== 2) {
        resolve();
        return;
      }
      // const { data, code } = await getTagPoint({
      //   size: '10',
      //   current: '1',
      //   classificationId: treeNode.dataRef?.id,
      // });
      const { data, code } = getTagPointMock;
      if (code !== 200) {
        resolve();
        return;
      }
      const node = findTreeNodeById(tree.value!, treeNode.dataRef.id);
      const children = data.map(item => {
        return new TreeNode({
          ...item,
          id: item.taglogicid,
          description: item.tagdesc,
          isLeaf: true,
          reload: false,
        })
      }).concat(new TreeNode({
        id: node?.getId() + '-reload',
        classificationId: node?.getId(),
        description: '加载更多',
        isLeaf: true,
        checkable: false,
        reload: true,
        crtPage: 1,
      }));
      node?.setChildren(children);

      resolve();
    } catch (e) {
      reject();
    }
    // if (treeNode.dataRef.children) {
    //   return;
    // }
    // setTimeout(() => {
    //   treeNode.dataRef.children = [
    //     { description: 'Child Node', id: `${treeNode.eventKey}-0` },
    //     { description: 'Child Node', id: `${treeNode.eventKey}-1` },
    //   ];
    //   tree.value = [...tree.value];
    //   resolve();
    // }, 1000);
  });
};

const handleLoadMore = async (id: string) => {
  const node = findTreeNodeById(tree.value!, id)!;
  // todo 发布时删除
  const crtPage = node.crtPage + 1;
  // const { data, code } = await getTagPoint({
  //   size: '10',
  //   current: String(crtPage),
  //   classificationId: node.classificationId,
  // });
  const { data, code } = getTagPointMock;
  if (code !== 200) {
    return;
  }
  if (!data || !data.length) return;

  const pId = node?.classificationId!;
  const pNode = findTreeNodeById(tree.value!, pId)!;

  const children = data.map(item => {
    return new TreeNode({
      ...item,
      // todo 发布时删除
      id: item.taglogicid + '-' + node.crtPage,
      description: item.tagdesc,
      isLeaf: true,
      reload: false,
    })
  }).concat(new TreeNode({
    id: node?.getId(),
    classificationId: pId,
    description: '加载更多',
    isLeaf: true,
    checkable: false,
    reload: true,
    crtPage,
  }));
  const oldChildren = pNode.getChildren()!;
  pNode?.setChildren([...oldChildren.splice(0, oldChildren.length - 1), ...children]);
  console.log(pNode);
}

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
        @expand="onExpand"
        :load-data="onLoadData"
        block-node
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
