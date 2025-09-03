import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,   // 👈 makes state.cart available
  },
});
