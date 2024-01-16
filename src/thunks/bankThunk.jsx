import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bankService from "../services/bankService";

export const moneyTransferThunk = createAsyncThunk(
  "users/private/moneyTransfer",
  async ({ transferDetails, token }) => {
    const transaction = await bankService.transferMoney(transferDetails, token);

    if (transaction.code === 403) {
      throw new Error("Username/ Password Incorrect");
    }

    return transaction.data;
  }
);
