import React, { createContext, useReducer, useEffect } from 'react'
import { actions, initialFetch } from './actions'
import { reducer } from './reducer'
import { initialState } from './initialState'

export const ElectionContext = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    initialFetch().then((res) => dispatch(res))
  }, [dispatch])

  const value = {
    ...state,
    addPartial: () => {
      dispatch({ type: actions.ADD_PARTIAL })
    },
  }

  return <ElectionContext.Provider value={value}>{children}</ElectionContext.Provider>
}
