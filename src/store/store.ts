import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";

export const setupStore = () => {
    return configureStore({
        reducer: appSlice,
    })
}

export type RootState = ReturnType<typeof appSlice>;