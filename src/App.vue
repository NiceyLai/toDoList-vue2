<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

body {
  background: #f5f5f5;
}

#app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
}

nav {
  padding: 30px;
}
</style>