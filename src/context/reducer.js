import { actions } from './actions'
import _ from 'lodash'
import { UFS } from '../utils/ufs'

export function reducer(state, action) {
  console.log('action', action)
  switch (action.type) {
    case actions.INITIAL_FETCH:
      if (!action?.payload?.items) return state
      return {
        ...state,
        partials: {
          allUfs: _.uniq(action.payload.items.map((item) => item.uf)),
          byUf: action.payload.items.reduce((prev, current) => {
            if (prev?.[current.uf]) {
              return {
                ...prev,
                [current.uf]: { ...prev[current.uf], current, history: prev[current.uf].history.concat([current]) },
              }
            } else {
              return {
                ...prev,
                [current.uf]: { name: UFS[current.uf].name, uf: current.uf, current, history: [current] },
              }
            }
          }, {}),
        },
      }
    // case actions.ADD_PARTIAL:
    //   return { ...state, BR: { ...state.BR, init: state.BR.init + 1 } }
    default:
      return state
  }
}
