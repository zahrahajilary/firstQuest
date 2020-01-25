 
import * as types from './mutation-types'

export const getResult = ({ commit }, result) => {
  commit(types.RESULT, result)
}