import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [incomeBtnSelected, setIncomeBtnSelected] = useState(false);
  const [expenseBtnSelected, setExpenseBtnSelected] = useState(false);
  const { addTransaction } = useContext(GlobalContext);
  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount,
  };
  const onSubmit = (eve) => {
    eve.preventDefault();
    addTransaction(newTransaction);
  };
  const handleIncome = () => {
    setAmount((prevAmount) => Math.abs(prevAmount));
    setIncomeBtnSelected(true);
    setExpenseBtnSelected(false);
  };
  const handleExpense = () => {
    setAmount((prevAmount) => prevAmount * -1);
    setExpenseBtnSelected(true);
    setIncomeBtnSelected(false);
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>

          <input
            required
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Enter amount..."
          />
        </div>
        <div className="btn-container">
          <button
            type="button"
            onClick={handleIncome}
            className={`expense-btn ${
              incomeBtnSelected ? "expense-btn-selected" : null
            }`}
          >
            +
          </button>
          <button
            type="button"
            onClick={handleExpense}
            className={`expense-btn ${
              expenseBtnSelected ? "expense-btn-selected" : null
            }`}
          >
            -
          </button>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
