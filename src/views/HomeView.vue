<template>
  <div class="home">
    <Nav></Nav>
    <section>
      <Now></Now>
      <Finish></Finish>
    </section>
    <footer>Copyright Nicey&copy; 2022 todolist.cn</footer>
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
export default class HomeView extends Vue {
  created() {
    console.log(1111);
    
    this.$store.commit("getList");
    console.log(22222);
    
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset.scss";
</style>