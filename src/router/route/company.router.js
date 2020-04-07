
const Index= () => import(/* webpackChunkName: "company.index" */ '@/view/company/company.index.vue');
const Build= () => import(/* webpackChunkName: "company.build" */ '@/view/company/company.build.vue');
const Device= () => import(/* webpackChunkName: "company.device" */ '@/view/company/company.device.vue');
const Fire_control= () => import(/* webpackChunkName: "company.fire-control" */ '@/view/company/company.fire-control.vue');
export default [
  {
    path: '/company',
    name:'company',
    meta:{name: '单位信息',header: true},
    children: [
      {
          path: '/company-index',
          name: 'company-index',
          meta:{name: '单位基本信息',header: true},
          component: Index,
      },{
        path: '/company-build',
        name: 'company-build',
        meta:{name: '建筑管理',header: true},
        component: Build,
      },{
        path: '/company-device',
        name: 'company-device',
        meta:{name: '设备管理',header: true},
        component: Device,
      },{
        path: '/company-fireControl',
        name: 'company-fireControl',
        meta:{name: '单位消防系统',header: true},
        component: Fire_control,
      }
    ]
  }
];