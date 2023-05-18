import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 30000 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 15000 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(payload) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: payload,
    });
  }
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
