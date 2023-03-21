import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todosSlice } from "./todosSlice";

import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer },
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterSlice.actions.increment()); // state from 0 to 1
store.dispatch(counterSlice.actions.increment()); // state from 1 to 2
store.dispatch(counterSlice.actions.decrement(5)); // state from 2 to -3
store.dispatch(counterSlice.actions.reset()); // state from  -3 to 0

store.dispatch(
  todosSlice.actions.add({ id: 0, title: "Go to the shop", completed: false })
);
/*
   [{id: 0, title: "Go to the Shop", completed: false}]
*/

store.dispatch(
  todosSlice.actions.add({ id: 1, title: "Go to the park", completed: false }) // {id: 0, title: "Go to the park", completed: false}
);
/*
   [
     {id: 0, title: "Go to the Shop", completed: false},
     {id: 1, title: "Go to the park", completed: false},
   ]
*/

store.dispatch(todosSlice.actions.edit({ id: 0, data: { completed: true } }));
/*
   [
     {id: 0, title: "Go to the Shop", completed: true},
     {id: 1, title: "Go to the park", completed: false},
   ]
*/

store.dispatch(todosSlice.actions.remove(0));
/*
   [
     {id: 1, title: "Go to the park", completed: false},
   ]
*/
