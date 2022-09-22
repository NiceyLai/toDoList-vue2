<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ol v-for="item in todoList" :key="item.id">
      <li>
        <input type="checkbox" checked="checked" />
        <p>{{ item.title }}</p>
        <a href="javascript:;"></a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
        todoList: {
          type: Array,
          default: () => {
                return [];
            },
        }
    },
    data() {
        return {

    }
  }
};
</script>

<style></style>
