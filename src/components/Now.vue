<template>
  <div>
    <h2>正在进行 <span id="todocount"></span></h2>
    <ol id="todolist" class="demo-box"></ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Now extends Vue {}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid green;
}
</style>
