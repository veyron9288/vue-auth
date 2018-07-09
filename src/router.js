const routers = [
  {
    path: '/',
    meta: {
      title: ''
    },
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: 'login'
    },
    component: resolve => require(['./views/login.vue'], resolve)
  },
  {
    path: '/home',
    meta: {
      title: 'home'
    },
    component: resolve => require(['./views/home.vue'], resolve)
  }
]
export default routers
