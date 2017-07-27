<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer"></div>
        </div>
      </header>
  
      <main class="mdl-layout__content">
  
        <router-view></router-view>
  
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>

<style>
[v-cloak] {
  display: none;
}

.demo-layout-transparent {
  /* background: url('../assets/demos/transparent.jpg') center / cover; */
  background-color: black;
}

.mdl-layout__drawer>.mdl-layout-title {
  padding-left: 22px;
}
</style>