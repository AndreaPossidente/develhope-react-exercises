import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";

// combineReducers non serve, perché viene chiamato internamente dal configureStore di redux toolkit
/*
  const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
  })
*/

export const store = configureStore({
  reducer: { counterReducer, todosReducer },
});

store.dispatch(counterSlice.actions.increment()); // state from 0 to 1
store.dispatch(counterSlice.actions.increment()); // state from 1 to 2
store.dispatch(counterSlice.actions.decrement(5)); // state from 2 to -3
store.dispatch(counterSlice.actions.reset()); // state from  -3 to 0
