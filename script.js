
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
  template: '<div>A custom component!</div>'
})


const app = new Vue({
  el: '#app',
  router: router,
  data: {
    message: 'Sebastion !'
  }
})

