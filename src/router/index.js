import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/GeneralViews/Search';
import List from '@/components/GeneralViews/List';
import Detail from '@/components/GeneralViews/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/detail/:ASIN',
      name: 'detail',
      component: Detail,
      props: true,
    },
    {
      path: '*',
      redirect: '/search',
    },
  ],
});
