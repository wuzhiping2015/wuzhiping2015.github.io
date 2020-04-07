import Vue from 'vue'



import inde from '@/index.vue'

import Index from '@/views/Index.vue'
import Login1 from '@/views/Login1.vue'

import Main from '@/views/Main.vue'
import Login from '@/views/login.vue'

import ceshi from '@/views/ceshi.vue'

import Error from '@/views/Error.vue'


//子路由
import temp from "@/views/login/temp"
import temp1 from "@/views/login/temp1"


//一般单页面应用spa都要用到的前端路由
import Router from 'vue-router'
Vue.use(Router) // 注册vue-router


/* const router=new VueRouter({ */
export default new Router({

  mode: 'history', //去除#
  base:__dirname,
  linkActiveClass: "action", //通过设置这个属性值，给所有的激活样式，添加统一的类

  routes: [{
      path: '/',
      name: 'Login1',
      component: Login1
    },

    //配置Error
    {
      path: "/Error",
      name: "Error",
      component: Error
    },

    {
      path: '/index',
      name: 'index',
      component: inde,

      children: [{
          path: '/',
          path: 'Main',
          component: Main,
        },
       /* {
          path: "/jd",
          name: "jd",
          component: () => import('@/views/jd.vue'),
        }, */
        {
          path: "/jd",
          name: "jd",
          component: () => import('@/views/jd.vue'),
        },

        {
          path: "/bd",
          name: "bd",
          component: () => import('@/views/bd.vue'),
        },
        /*  {
           path: "/text",
           name: "text",
           component: () => import('@/views/text.vue'),
         }, */

        {
          path: "/ceshi",
          name: "ceshi",
          component: () => import('@/views/ceshi.vue')
        },

        {
          path: "/chachao",
          name: "chachao",
          component: () => import('@/views/chachao.vue')
        },


        {
          path: "/ceshi1",
          name: "ceshi1",
          component: () => import('@/views/ceshi1.vue')
        },



        {
          path: "/bb",
          name: "bb",
          component: () => import('@/components/bb.vue'),
        },
        {
          path: "/bbb",
          name: "bbb",
          component: () => import('@/components/bbb.vue'),
        },
        {
          path: "/cc",
          name: "cc",
          component: () => import('@/components/cc.vue'),
        },
        {
          path: "/element",
          name: "element",
          component: () => import('@/components/element.vue'),
        },
        {
          path: "/Hello",
          name: "Hello",
          component: () => import('@/components/Hello.vue'),
        },
        {
          path: "/loggg",
          name: "loggg",
          component: () => import('@/components/loggg.vue'),
        },
        {
          path: "/vuecli",
          name: "vuecli",
          component: () => import('@/components/loggg.vue'),
        },

        {
          path: "/ES6",
          name: "ES6",
          component: () => import('@/components/ES6.vue'),
        },
        {
          path: "/suanfa",
          name: "suanfa",
          component: () => import('@/components/suanfa.vue'),
        },

        {
          path: "/anli",
          name: "anli",
          component: () => import('@/views/anli.vue')
        },
        //新建商城**************************

        {
          path: "/shop",
          name: "shop",
          component: () => import("@/shop/shop.vue"),
          meth:{
            showfoot:true
          }
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("@/shop/blog.vue"),
          meth:{
            showfoot:true
          }
        },
        {
          path: "/blogs",
          name: "blogs",
          component: () => import("@/shop/blogs.vue")
        },

        {
          path: "/biaodan",
          name: "biaodan",
          component: () => import("@/shop/biaodan.vue")
        },

        {
          path: "/biaodantijiao",
          name: "biaodantijiao",
          component: () => import("@/shop/biaodantijiao.vue")
        },
        {
          path: "/bendiqingqiu",
          name: "bendiqingqiu",
          component: () => import("@/shop/bendiqingqiu.vue")
        },


        {
          path: '/Login',
          name: 'Login',
          component: Login,
          //子路由
          children: [
            /* {
                  path: '/',
                  component: Login,
                }, */
            /*  设置默认 加这个会出现两次引入*/
            {
              path: 'temp',
              path: 'temp',
              component: temp,
            },
            {
              path: 'temp1',
              component: temp1,
            },
            //配置根路由
            {
              path: "/",
              redirect: "temp"
            }
          ]
        },
        {
          path: '/Index',
          name: 'Index',
          component: Index,
        },
        {
          path: '/Login1',
          name: 'Login1',
          component: Login1,
        },


        //配置根路由
        /*   {
            path: "/",
            redirect: Login1
          }, */
      ]

    },
    {
      path: '*',
      //component:Error  也可以这样写
      component: () => import('@/views/Error.vue') // 或者使用component也可以的
    },

  ]
})
