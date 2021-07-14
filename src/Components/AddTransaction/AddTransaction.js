import React, { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const AddTransaction = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const [inputRemark, setInputRemark] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onInputAmountHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const onInputRemarkHandler = (event) => {
    setInputRemark(event.target.value);
  };

  const onAddTransactionHandler = (event) => {
    event.preventDefault();
    const txnObj = {
      id: Math.floor(Math.random() * 100000000),
      remarks: inputRemark,
      amount: +inputAmount,
    };

    if (inputRemark == null || inputRemark === "") {
      alert("Please enter remarks");
    } else if (inputAmount == null || inputAmount === 0 || inputAmount === "") {
      alert("Please enter amount");
    } else {
      addTransaction(txnObj);
      setInputAmount(0);
      setInputRemark("");
    }
  };

  return (
    <div>
      <form id="form" onSubmit={onAddTransactionHandler}>
        <div className="form-control">
          <label htmlFor="remark">Remarks</label>
          <input
            type="text"
            placeholder="Enter Remark..."
            value={inputRemark}
            onChange={onInputRemarkHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={onInputAmountHandler}
            value={inputAmount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
