import { actions } from './actions'
import { initialState } from './initialState'

export function reducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case actions.INITIAL_FETCH:
      if (!action?.payload?.items) return state
      return {
        ...state,
        partials: {
          ...state.partials,
          byUf: action.payload.items.reduce((prev, current) => {
            return {
              ...prev,
              [current.uf]: {
                ...prev[current.uf],
                current,
                history: prev[current.uf] ? prev[current.uf].history.concat([current]) : [current],
              },
            }
          }, state.partials.byUf),
        },
      }
    case actions.ADD_PARTIAL:
      return {
        ...state,
        partials: {
          byUf: {
            ...state.partials.byUf,
            [action.payload.uf]: {
              ...state.partials.byUf[action.payload.uf],
              current: action.payload,
              history: state.partials.byUf[action.payload.uf].history.concat(action.payload),
            },
          },
        },
      }
    case actions.SET_PRED_FILTER:
      return {
        ...state,
        partials: {
          ...state.partials,
          predFilter: action.payload,
        },
      }
    case actions.SET_REG_FILTER:
      return {
        ...state,
        partials: {
          ...state.partials,
          regFilter: action.payload,
        },
      }
    default:
      return state
  }
}
