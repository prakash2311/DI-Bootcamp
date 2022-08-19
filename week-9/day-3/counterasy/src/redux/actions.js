export const add = () => {
    return {
      type: 'INCREMENT',
    }
  }
  
  export const min = () => {
    return {
      type: 'DECREMENT',
    }
  }
  
  export const addodd = () => {
      return {
        type: 'INCREMENT_ODD',
      }
  }
  export const addasyn = () => (dispatch) => {
    setTimeout(()=>{
      dispatch({
      type: 'INCREMENT_ASYN',
    })},1000)
  }