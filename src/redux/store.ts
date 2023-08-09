import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userSettingSlice } from "./slice/userSlice";
import { authApi } from "../services/authService";
import { typeRoomsApi } from "../services/roomService";

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [typeRoomsApi.reducerPath]: typeRoomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(typeRoomsApi.middleware),
});
setupListeners(store.dispatch);
