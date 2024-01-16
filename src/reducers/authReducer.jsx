import {createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/authThunk";
import { moneyTransferThunk } from "../thunks/bankThunk";

const initialState = {
    currentUser: null,
    role: null,
    token: null,
    transactions: [],
    loadingFlag: false,
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
            state.loadingFlag = false;
        })
        .addCase(loginThunk.rejected, (state) => {
            throw new Error("Wrong Credentials Enter. Please try again")
        })
        .addCase(loginThunk.pending, (state) => {
            state.loadingFlag = true;
        })
        .addCase(moneyTransferThunk.fulfilled, (state, {payload}) => {
            state.transactions.push(payload);
            state.loadingFlag = false;
        })
        .addCase(moneyTransferThunk.rejected, (state) => {
            throw new Error("Transfer could not be completed")
        })
        .addCase(moneyTransferThunk.pending, (state) => {
            state.loadingFlag = true;
        })
    }
});
export default authSlice.reducer;
