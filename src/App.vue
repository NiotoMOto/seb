<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout
                        mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer"></div>
        </div>
      </header>
  
      <main class="mdl-layout__content">
  
        <div class="page-content mdl-grid card-container">
          <!-- <router-view></router-view> -->
          <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-card mdl-shadow--2dp card-line" v-for="(item, key) in items">
              <div class="mdl-card__title" v-bind:style="{ background: 'url(' + item.img + ')', color: item.color }">
                <h2 class="mdl-card__title-text">Welcome</h2>
              </div>
              <div class="mdl-card__supporting-text mdl-grid">
                <div class="mdl-cell--4-col" v-cloak>{{item.description}}</div>
                <div class="mdl-cell--8-col" v-cloak>{{item.description}}</div>
              </div>
              <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" v-bind:style="{ color: item.color }">
                  <i class="material-icons">share</i>
                </button>
              </div>
            </div>
          </div>
        </div>
  
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
      items: [
        { img: 'src/assets/images/img1.jpg', title: 'TItle', description: 'En route pour l\'auvergne' },
        { img: 'src/assets/images/img2.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img3.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img4.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img5.jpg', title: 'TItle', description: 'En route pour l\'auvergne' }
      ],
    }
  }
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

.card-container {
  max-width: 700px;
  justify-content: center;
}

.card-line {
  width: 100%;
  margin-bottom: 15px;
}

.card-line .mdl-card__title {
  height: 300px;
}
</style>