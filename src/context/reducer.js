import { actions } from './actions'
import _ from 'lodash'

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
            return {
              ...prev,
              [current.uf]: {
                ...prev[current.uf],
                current,
                history: prev[current.uf] ? prev[current.uf].history.concat([current]) : [current],
              },
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
