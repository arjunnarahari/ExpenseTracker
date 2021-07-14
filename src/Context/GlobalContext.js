import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const deleteTransaction = (id) => {
    dispatch({
      payload: id,
      type: "delete",
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      payload: transaction,
      type: "add",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
