import Vue from 'vue'
import VueRouter from 'vue-router'
import find from '../views/find'
import newMusic from '../views/newMusic'
import newMv from '../views/newMv'
import audioPlay from '../views/audioPlay'
import mvPlay from '../views/mvPlay'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
          path:'*',
          redirect:'/find'
        },
        {
          path:'/find',
          component:find
        },
        {
          path:'/newMusic',
          component:newMusic
        },
        {
          path:'/newMv',
          component:newMv
        },
        {
          path:'/audioPlay',
          component:audioPlay
        },
        {
          path:'/mvPlay',
          component:mvPlay
        },
    ]
})


export default router