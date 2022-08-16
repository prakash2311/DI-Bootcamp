import {INCREASE_COUNT,DECREASE_COUNT} from '../actions/index'

const initialState = {
  count: 9,
}

export const counter_reducer = (state=initialState,action={}) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {...state, count: state.count + 1}
    case DECREASE_COUNT:
      return {...state, count: state.count - 1}
    default:
      return {...state}
  }
}

export const reducer = ({
  counter_reducer
})
