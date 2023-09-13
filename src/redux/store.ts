import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userSettingSlice } from "./slice/userSlice";
import { authApi } from "../services/authService";
import { typeRoomsApi } from "../services/roomService";
import { hostApi } from "../services/hostService";
import { commentApi } from "../services/commentService";
import { discountApi } from "../services/discountService";
import { bookingApi } from "../services/bookingService";
import { accountApi } from "../services/accountService";

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [typeRoomsApi.reducerPath]: typeRoomsApi.reducer,
    [hostApi.reducerPath]: hostApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [discountApi.reducerPath]: discountApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(typeRoomsApi.middleware)
      .concat(hostApi.middleware)
      .concat(commentApi.middleware)
      .concat(discountApi.middleware)
      .concat(bookingApi.middleware)
      .concat(accountApi.middleware)
});
setupListeners(store.dispatch);
