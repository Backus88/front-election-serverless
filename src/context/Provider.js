import React, { createContext, useReducer, useEffect } from 'react'
import { actions, initialFetch } from './actions'
import { reducer } from './reducer'
import { initialState } from './initialState'
import { addPartial } from './actions'

export const ElectionContext = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    initialFetch().then((res) => dispatch(res))
    addPartial(dispatch)
  }, [dispatch])

  const value = {
    ...state,
    setPredFilter: (payload) => {
      dispatch({ type: actions.SET_PRED_FILTER, payload })
    },
    setRegFilter: (payload) => {
      dispatch({ type: actions.SET_REG_FILTER, payload })
    },
  }

  return <ElectionContext.Provider value={value}>{children}</ElectionContext.Provider>
}
