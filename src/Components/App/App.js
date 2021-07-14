import React from "react";
import Header from "../Header/Header";
import Balance from "../Balance/Balance";
import IncomeExpenses from "../IncomeExpenses/IncomeExpenses";
import TransactionList from "../TransactionList/TransactionList";
import AddTransaction from "../AddTransaction/AddTransaction";
import { GlobalProvider } from "../../Context/GlobalContext";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
