import {createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/authThunk";
const initialState = {
    currentUser: null,
    role: null,
    token: null
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.token = payload.token;
            state.role = payload.currentUser.userRole;
            state.currentUser = payload.currentUser;
        })
        .addCase(loginThunk.rejected, (state) => {
            throw new Error("Wrong Credentials Enter. Please try again")
        })
    }
});
export default authSlice.reducer;
