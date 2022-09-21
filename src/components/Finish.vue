<template>
  <div>
    <h2>已经完成 <span id="donecount"></span></h2>
    <ul id="donelist"></ul>
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
div {
  border: 1px solid blue;
}
</style>
