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