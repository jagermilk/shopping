import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getter';
export default createStore({
  state: {
    cartlist:[]
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
