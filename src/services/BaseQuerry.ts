import {  fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const BaseQuerryWithAuth = fetchBaseQuery({
    baseUrl:import.meta.env.VITE_API_URL,
    prepareHeaders:(headers)=>{
        const token= localStorage.getItem("token");
        if(token){
            headers.set("Authorization",`Bearer ${token}`)
        }
        return headers
    },
    cache:"no-cache",
})

export const BaseQuerryWithoutAuth = fetchBaseQuery({
    baseUrl:import.meta.env.VITE_API_URL,
    
    cache:"no-cache",
})

