import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const onClickDeleteHandler = () => {
    deleteTransaction(props.txns.id);
  };

  const sign = props.txns.amount < 0 ? "-" : "+";
  const borderClass = props.txns.amount < 0 ? "minus" : "plus";

  return (
    <div>
      <li className={borderClass}>
        {props.txns.remarks}
        <span>
          {sign} Rs {Math.abs(props.txns.amount)}
        </span>
        <button className="delete-btn" onClick={onClickDeleteHandler}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
