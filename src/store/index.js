import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// let defaultCity = '上海'
// try{
//   if(localStorage.city){
//     defaultCity = localStorage.city;
//   }
// } catch (e) {}
export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  // mutations: {
  //   // mutations方法默认的参数为state,数据
  //   changeCity (state,city) {
  //     state.city = city;
  //     try{
  //       localStorage.city = city;
  //     } catch (e) {}      
  //   }
  // },
  state,
  mutations
  // actions: {
  //   // actions的方法默认参数为ctx(上下文)，数据
  //   changeCity (ctx,city) {
  //     // console.log(ctx,city)
  //     // actions通过commit调用mutations   commit('要修改的mutations的方法名'，数据)
  //     ctx.commit('changeCity',city)
  //   }
  // }
})