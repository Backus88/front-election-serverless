import { listElectionPartials, listSorted } from '../graphql/queries'
import { API } from 'aws-amplify'
import { onChangeElectionPartial } from '../graphql/subscriptions'

export const actions = {
  INITIAL_FETCH: 'INITIAL_FETCH',
  ADD_PARTIAL: 'ADD_PARTIAL',
  SET_PRED_FILTER: 'SET_PRED_FILTER',
  ET_REG_FILTER: 'SET_REG_FILTER',
}

export const initialFetch = async () => {
  const response = await API.graphql({
    query: listElectionPartials,
    variables: {
      limit: 999999999,
      // sortDirection: 'DESC'
    },
  })

  console.log('items', response?.data?.listElectionPartials?.items)

  return { type: actions.INITIAL_FETCH, payload: { items: response?.data?.listElectionPartials?.items } }
}

export const addPartial = (dispatch) => {
  return API.graphql({
    query: onChangeElectionPartial,
  }).subscribe({
    next: ({ provider, value }) => {
      const payload = value.data.onChangeElectionPartial
      console.log('onChangeElectionPartial', payload)
      dispatch({ type: actions.ADD_PARTIAL, payload })
    },
    error: (error) => console.warn('error', error),
  })
}
