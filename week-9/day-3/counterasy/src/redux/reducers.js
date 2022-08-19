export const reducer = (state = 0, action={}) =>{
    switch (action.type) {
        case 'INCREMENT':
          return state+1 
        case 'DECREMENT':
          return state-1 
        case 'INCREMENT_ODD':
          if(state.amount%2===0)
           return state +1 
           return state 
        case 'INCREMENT_ASYN':
          return state+1 
        default:
          return state
      }
    }




