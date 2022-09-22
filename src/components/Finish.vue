<template>
  <div>
    <h2>已经完成 <span id="donecount">43</span></h2>
    <ul id="donelist">
      <li>
        <input type="checkbox" />
        <p>" + n.title + "</p>
        <a href="javascript:;" id=" + i + "></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Finish extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";
div {
  border: 1px solid blue;
}
</style>