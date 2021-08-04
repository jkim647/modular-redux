
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    console.log("counterReducer")
    if (action.type === 'increment') {
        console.log("increment")
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    }
  
    if (action.type === 'increase') {
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    }
  
    if (action.type === 'decrement') {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    }
  
    if (action.type === 'toggle') {
        console.log("toggle")
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    }
  
    return state;
  };

  export default counterReducer