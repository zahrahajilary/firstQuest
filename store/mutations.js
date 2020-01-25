import * as types from './mutation-types'

export const mutations = {
  [types.RESULT] (state, slug) {
    state.result = slug

  }
}
