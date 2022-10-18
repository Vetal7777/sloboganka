import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "../../state/state";
import {ContentI} from "../../model/state";

export const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        getSuccess(state,action:PayloadAction<ContentI>){
            state.isLoading = false;
            state.content = action.payload;
        },
        failed(state,action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        toggleMenuStatus(state){
            state.showMenu = !state.showMenu;
        }
    }
})

export default appSlice.reducer;