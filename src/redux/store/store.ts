import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSettingSlice } from '../slices/userSlice';
import { authAPI } from '../../services/authAPI';


export const store = configureStore({
  reducer: {
    [userSettingSlice.name]:userSettingSlice.reducer,
    [authAPI.reducerPath]:authAPI.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware),
});
setupListeners(store.dispatch); 