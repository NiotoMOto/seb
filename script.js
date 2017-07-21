
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
    message: 'Sebastion !'
  }
}).$mount('#app')

