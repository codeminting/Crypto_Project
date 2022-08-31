import { configureStore } from "@reduxjs/toolkit";
// Reducers
import userReducer from "../features/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
