<template>
  <div>
    <h2>正在进行 <span id="todocount">22</span></h2>
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
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

div {
  border: 1px solid green;
}
</style>