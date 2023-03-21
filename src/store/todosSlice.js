import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    edit: (state, action) => {
      const { id, data } = action.payload;
      const user = state.find((usr) => usr.id === id);
      for (let key in data) {
        user[key] = data[key];
      }
    },
  },
});

export default todosSlice.reducer;
