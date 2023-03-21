import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => (state += action.payload || 1),
    decrement: (state, action) => (state -= action.payload || 1),
    reset: (state, action) => action.payload || initialState,
  },
});

export default counterSlice.reducer;

// Versione non più utilizzata, senza redux toolkit

// const INCREMENT = "COUNTER@INCREMENT";
// const DECREMENT = "COUNTER@DECREMENT";
// const RESET = "COUNTER@RESET";

// export function increment(by = 1) {
//   return {
//     type: INCREMENT,
//     payload: by,
//   };
// }

// export function decrement(by = 1) {
//   return {
//     type: DECREMENT,
//     payload: by,
//   };
// }

// export function reset(initialValue) {
//   return {
//     type: RESET,
//     payload: initialValue || initialState,
//   };
// }

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + action.payload;
//     case DECREMENT:
//       return state - action.payload;
//     case RESET:
//       return action.payload || initialState;
//     default:
//       return state;
//   }
// };
