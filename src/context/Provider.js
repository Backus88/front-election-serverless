import React, { createContext, useReducer } from 'react'
import { actions } from './actions'
import { reducer } from './reducer'
import { initialState } from './initialState'

export const ElectionContext = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    initialFetch: () => {
      dispatch({ type: actions.INITIAL_FETCH })
    },
    addPartial: () => {
      dispatch({ type: actions.ADD_PARTIAL })
    },
  }

  return <ElectionContext.Provider value={value}>{children}</ElectionContext.Provider>
}
