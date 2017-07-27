import VueRouter from 'vue-router';

import Story from './containers/Story.vue';

var router = new VueRouter({
  routes: [
    { path: '/', component: Story },
  ]
});

export default router;
