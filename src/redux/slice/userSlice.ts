import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

interface IUserSetting {
  user?: IUser;
  token?: string;
}
const userSettingInitial: IUserSetting = {
  user: undefined,
};
export const userSettingSlice = createSlice({
  name: "userSetting",
  initialState: userSettingInitial,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
    },
    logoutUser: (state) => {
      state.user = undefined;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
export const { setUser, logoutUser } = userSettingSlice.actions;
