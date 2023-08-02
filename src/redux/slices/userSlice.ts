import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

interface IUserSetting{
    user?:IUser
    token?:string
}
const userSettingInit:IUserSetting={
    user:undefined
}
export const userSettingSlice= createSlice({
    name:"userSetting",
    initialState:userSettingInit,
    reducers:{
        setUser:(state,action)=>{
            state.user= action.payload.user 
            state.token= action.payload.accessToken 

            localStorage.setItem("auth",JSON.stringify(action.payload))
            localStorage.setItem("token",JSON.stringify(action.payload.accessToken))

        },
        logoutUser:(state)=>{
            state.user= undefined;
            localStorage.removeItem("auth")
            localStorage.removeItem("token")

        }
    }
})
export const {setUser,logoutUser}=userSettingSlice.actions