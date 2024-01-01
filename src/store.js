import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;