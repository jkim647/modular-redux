import counterReducer from '../reducer/counterReducer'
import { createStore, combineReducers } from 'redux';
import createReducer from "./rootReducer"
const initialState = {}
// const staticReducers = {
//   counter: counterReducer
// }

// The ideas here and in createReducer are directly from Dan:
// https://stackoverflow.com/a/33044701
const initializeStore = () => {
  const store = createStore(
    createReducer()
  );

  // Create an object for any later reducers
  store.asyncReducers = {};

  // Creates a convenient method for adding reducers later
  // See withReducer.js for this in use.
  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    store.asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    // See rootReducer.createReducer for more details, but it returns a function.
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };
  return store
};

export default initializeStore

// const newRootReducer = combineReducers({
//   existingSlice: counterReducer,
//   newSlice: newSliceReducer
// })

// store.replaceReducer(newRootReducer);


// //merging staticReducers and asyncReducer, it is not replacing old reducer with new reducer
// // function createReducer(asyncReducers){
// //   console.log("creating reducer")
// //   return combineReducers({
// //     ...staticReducers,
// //     ...asyncReducers
// //   })
// // }

// // const store = createStore(createReducer())

// export default function configureStore() {

//   //Add a dictionary to keep track of the registered async reducers
//   store.asyncReducers = {}

//   //Create an inject reducer function
//   //This function adds the async reducer, and creates a new combined reducer
//   store.injectReducer = (key, asyncReducers) => {
//     console.log("replace Reducer")
//     store.asyncReducers[key] = asyncReducers
//     store.replaceReducer(createReducer(store.asyncReducers))
//   }

//   //Return the modified store
//   return store
// }



// export function getStore() {
//   return store
// }

