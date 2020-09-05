// 直接更新state的多个方法的对象
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){   //{address} 接收包含传递参数的对象
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo={}
  },
  [RECEIVE_GOODS](state,{goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
      state.ratings = ratings
    },
  [RECEIVE_INFO](state,{info}){
    state.info=info
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      // food.count=1  //第一次没有 默认为1;新增属性（没有数据绑定）
      //1.对象 2.属性名 3.属性值
      Vue.set(food,'count',1)  //这种添加方式 让新增的属性也有数据绑定
      state.cartFoods.push(food)  //push添加
    }else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
   if(food.count){
     food.count--
     if(food.count===0){
       state.cartFoods.splice(state.cartFoods.indexOf(food),1)  //splice必须有下标（indexOf方法）1 代表删除个数
     }
   }
  }
}
