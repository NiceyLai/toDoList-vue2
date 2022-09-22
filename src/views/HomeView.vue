<template>
  <div class="home">
    <Nav></Nav>
    <section>
      <Now></Now>
      <Finish></Finish>
    </section>
    <footer>Copyright &copy; 2014 todolist.cn</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "../components/Nav.vue";
import Now from "../components/Now.vue";
import Finish from "../components/Finish.vue";

@Component({
  components: { Nav, Now, Finish },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";
section {
  margin: 0 auto;
}

@media screen and (max-device-width: 620px) {
  section {
    width: 96%;
    padding: 0 2%;
  }
}

@media screen and (min-width: 620px) {
  section {
    width: 600px;
    padding: 0 10px;
  }
}
</style>