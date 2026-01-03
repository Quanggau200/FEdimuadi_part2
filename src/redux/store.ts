import {setupListeners} from "@reduxjs/toolkit/query"
import {configureStore} from "@reduxjs/toolkit"
import {createStore} from "redux";
import {apiSlgiice} from "../services/ApiSlice.ts";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice,
        user:userSlice,
        products:productSlice
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.reducer)
})
setupListeners(store);
export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
