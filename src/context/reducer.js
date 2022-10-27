export function reducer(state, action) {
  switch (action.type) {
    case actions.INITIAL_FETCH:
      return {
        BR: { init: 1 },
        RJ: { init: 1 },
      }
    case actions.ADD_PARTIAL:
      return { ...state, BR: { ...state.BR, init: state.BR.init + 1 } }
    default:
      return state
  }
}
