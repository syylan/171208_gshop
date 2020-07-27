/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
//注册全局组件标签 <mt-button>
 Vue.component(Button.name,Button)
 new Vue({
   el:'#app',
   render:h=>h(App),
   router,
   store
 })
