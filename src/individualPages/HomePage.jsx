import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoading } from "../hooks/useLoading";
import Loading from "../components/Loading";
import { moneyTransferThunk } from "../thunks/bankThunk";
const HomePage = () => {
  const userDetails = useSelector((state) => state.auth.currentUser);
  const [toUserNameTransfer, setToUserNameTransfer] = useState("");
  const [transferAmount, setTransferAmount] = useState(null);
  const [transactionDescription, setTransactionDescription] = useState("");
  const loadingFlag = useSelector((state) => state.auth.loadingFlag);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      const transferDetails = {
        toUserName: toUserNameTransfer,
        amount: transferAmount,
        description: transactionDescription,
      };
      console.log('f-i');
      console.log(token);
      dispatch(moneyTransferThunk({ transferDetails, token }));
    } catch (e) {
      alert(e);
    }
  };
  
  return (
    <>
      {!loadingFlag && (
        <div className="px-60 py-10">
          <h1 className="mb-10">WELCOME DA DEI {userDetails.userFirstName}</h1>
          <h2>YOUR BALANCE IS {userDetails.userBankBalance}</h2>
          <form onSubmit={handleTransfer} className="flex flex-col">
            <input
              type="text"
              accept="number"
              id="moneyForTransfer"
              name="moneyForTransfer"
              placeholder="How much to transfer"
              className="border-solid border-2 border-black my-10"
              onChange={(e) => {
                setTransferAmount(e.target.value);
              }}
            ></input>
            <input
              type="text"
              id="userNameToTransfer"
              name="userNameToTransfer"
              placeholder="Who to transfer"
              className="border-solid border-2 border-black mb-10"
              onChange={(e) => {
                setToUserNameTransfer(e.target.value);
              }}
            ></input>
            <input
              type="text"
              id="transactionDescription"
              name="transactionDescription"
              placeholder="Transaction Description"
              className="border-solid border-2 border-black mb-10"
              onChange={(e) => {
                setTransactionDescription(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              value="Transfer"
              className="border-solid border-2 bg-black mb-10 text-slate-100"
            >
              TRANSFER
            </button>
          </form>
        </div>
      )}
      {loadingFlag && <Loading />}
    </>
  );
};

export default HomePage;
