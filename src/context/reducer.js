import { actions } from './actions'

export function reducer(state, action) {
  console.log('action', action)
  switch (action.type) {
    case actions.INITIAL_FETCH:
      if (!action?.payload?.items) return state
      return {
        ...state,
        partials: {
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
    case actions.ADD_PARTIAL:
      return { ...state, byUf: { ...state.byUf, [action.payload.uf]: action.payload } }
    default:
      return state
  }
}
