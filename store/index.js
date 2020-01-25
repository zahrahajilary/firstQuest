import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)

const state = {
  result: ''
}

const createStore=()=>{
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters
      })
}
export default createStore
