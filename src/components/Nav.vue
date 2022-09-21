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
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

nav {
  height: 70px;
  background: $color-background;
  div {
    margin: 0 auto;
    label {
      float: left;
      width: 100px;
      line-height: 70px;
      color: #fff;
      font-size: 36px;
      cursor: pointer;
      font-family: $font-hei;
    }
    input {
      float: right;
      width: 60%;
      height: 40px;
      margin-top: 15px;
      text-indent: 10px;
      border-radius: 5px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
        0 1px 6px rgba(0, 0, 0, 0.45) inset;
      border: none;
    }
  }
}

@media screen and (max-device-width: 620px) {
  div {
    width: 96%;
    padding: 0 2%;
  }
}

@media screen and (min-width: 620px) {
  div {
    width: 600px;
    padding: 0 10px;
  }
}
</style>