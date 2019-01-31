
import { createStore } from 'redux'
const EDIT = "EDIT"
function reducer(state = {}, action) {
  switch (action.type) {
    case EDIT:
      return { value: action.value }
    default:
      return state
  }
}

const store = createStore(reducer, {value: "Hello world!"})
export default store

export const setValue = (value) => store.dispatch({
  type: EDIT,
  value
})
export const getValue = () => store.getState().value || ""
