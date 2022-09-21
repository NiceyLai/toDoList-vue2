<template>
  <nav>
    <div>
      <label>ToDoList</label>
      <input placeholder="添加ToDo" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Nav extends Vue {}
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  div {
    border: 1px solid red;
  }
}
</style>
