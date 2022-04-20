import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterReducer.js";

const store = configureStore({
  reducer: { textCounter: counterReducer },
});

export default store;
