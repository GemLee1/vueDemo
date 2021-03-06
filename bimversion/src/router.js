import Vue from 'vue';
import Router from 'vue-router';
import session from '@/utils/storage';

Vue.use(Router);

// menu代码是否在菜单中显示
// noAuth代表当前路由不需要权限即可访问
// exclude代表不需要keep-alive的路由
let [menu, exclude, noAuth] = [true, true, true];

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/components/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { menu, title: '首页', icon: 'iconfont icon-gps' },
        component: () => import('@/pages/home')
      },
      // 更改路由；
      {
        path: '/controlpanel',
        name: 'controlpanel',
        redirect: '',
        meta: { menu, title: '数据源管理', icon: 'iconfont icon-ad' },
        component: () => import('@/pages/controlpanel')
      },
      {
        path: '/yunJianZhu',
        name: 'yunJianZhu',
        meta: {
          exclude,
          title: '贵州云建住',
          parent: { name: 'dataVisualization', title: '数据可视化', icon: 'iconfont icon-gather' }
        },
        component: () => import('@/pages/dataVisualization/yunJianZhu')
      },
      /*{
        path: '/mapHot',
        name: 'mapHot',
        meta: { menu, title: '在线教程', icon: 'iconfont icon-hotMap' },
        component: () => import('@/pages/mapHot')
      },
      {
        path: '/chartDevice',
        name: 'chartDevice',
        meta: {
          exclude,
          title: '在线教程',
          parent: { name: 'DashboardData', title: '数据汇总', icon: 'iconfont icon-gather' }
        },
        component: () => import('@/pages/dashboard/chartDevice')
      },
      {
        path: '/mapCar',
        name: 'mapCar',
        meta: { menu, title: '用户社区', icon: 'iconfont icon-gps' },
        component: () => import('@/pages/mapCar')
      },
      {
        path: '/listMember',
        name: 'listMember',
        meta: { menu, title: '管理员列表', icon: 'iconfont icon-admin' },
        component: () => import('@/pages/listMember')
      },
      {
        path: '/listRole',
        name: 'listRole',
        meta: { menu, title: '角色列表', icon: 'iconfont icon-auth' },
        component: () => import('@/pages/listRole')
      },
      {
        path: '/test',
        name: 'test',
        meta: { menu, title: '测试按钮', icon: 'iconfont icon-auth' },
        component: () => import('@/pages/test')
      }*/
    ]
  },
  {
    path: '/resourceview',
    name: 'resourceview',
    meta: { noAuth },
    component: () => import('@/pages/resourceview')
  },
  {
    path: '/controlpanel',
    name: 'TypeSelect',
    meta: { noAuth },
    component: () => import('@/pages/controlpanel/typeselect')
  },
  {
    path: '/fileUpload/uploaderfile',
    name: 'FileUpload',
    meta: { noAuth },
    component: () => import('@/pages/fileUpload/uploaderfile')
  },
  {
    path: '/login',
    name: 'login',
    meta: { noAuth },
    component: () => import('@/pages/login')
  },
  {
    path: '*',
    name: 'notFound',
    meta: { noAuth },
    component: () => import('@/pages/notFound')
  }
];

const router = new Router({
  routes ,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  // 此处做权限拦截
  if (!to.meta.noAuth && !session.get('isLogin', 0)) {
    return next({ name: 'login' });
  }
  next();
});

export const aMenu = [];

// 菜单过滤
routes[0].children.map(item => {
  if (item.meta.menu) {
    aMenu.push({
      index: item.name,
      icon: item.meta.icon,
      title: item.meta.title
    });
  }

  if (item.meta.parent) {
    let obj = aMenu.find(obj => obj.index === item.meta.parent.name);
    let _item = { index: item.name, title: item.meta.title };

    if (obj) {
      obj.children.push(_item);
    } else {
      aMenu.push({
        index: item.meta.parent.name,
        icon: item.meta.parent.icon,
        title: item.meta.parent.title,
        children: [_item]
      });
    }
  }
});

export default router;
