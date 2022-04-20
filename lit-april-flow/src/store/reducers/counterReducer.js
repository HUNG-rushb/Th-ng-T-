import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { text: "", counter: 2000, valid: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    update(state, action) {
      state.text = action.payload.text;
      state.counter = 2000 - action.payload.length;
      state.valid = state.counter === 0 ? false : true;
    },
    // increment(state) {
    //   state.counter++;
    // },
    // decrement(state) {
    //   state.counter--;
    // },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
