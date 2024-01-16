import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "../services/authService";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        if (user.code === 403) {
            throw new Error("Username/ Password Incorrect");
        }
        return user.data;
    }
);

export const signinThunk = createAsyncThunk(
    "user/signup", async (credentials) => {
        const user = await authService.signup(credentials);
        if (user.code === 403) {
            throw new Error("Username/ Password Incorrect");
        }
        return user.data;
    }
);