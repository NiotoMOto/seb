
const Welcom = {
  template: '<div>WELCOM</div>'
};

const CV = {
  template: '<div>Cv</div>'
};

const Portfolio = {
  template: '<div>Portfolio</div>'
};


var router = new VueRouter({
  routes: [
    { path: '/', component: Welcom },
    { path: '/cv', component: CV },
    { path: '/portfolio', component: Portfolio }
  ]
})

// register
Vue.component('my-component', {
  template: '<div>TEst</div>'
})


const app = new Vue({
  router: router,
  data: {
    items: [
     {img: './assets/images/img1.jpg', title: 'TItle', description: 'En route pour l\'auvergne' },
     {img: './assets/images/img2.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
     {img: './assets/images/img3.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
     {img: './assets/images/img4.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
     {img: './assets/images/img5.jpg', title: 'TItle', description: 'En route pour l\'auvergne' } 
    ] 
  }
}).$mount('#app')
