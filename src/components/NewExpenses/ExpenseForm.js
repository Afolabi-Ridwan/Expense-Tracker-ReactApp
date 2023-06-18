import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (prop) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const submitTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const submitAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const submitDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // {title && amount }
    const newExpenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    {
      newExpenseData.title === ""
        ? alert("Please input Expense name")
        : console.log("Good");
    }

    {
      newExpenseData.amount === ""
        ? alert("Please input Expense amount")
        : console.log("Good");
    }

    {
      newExpenseData.date === ""
        ? alert("Please input Expense date")
        : console.log("Good");
    }
    // console.log(typeof newExpenseData.amount);
    prop.onSaveExpenseData(newExpenseData);
    // console.log(newExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const onCancel = () => {
    return prop.cancelBtnClicked();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="tab1">
            <div className="expensetitle">
              <label id="title"> Title </label>
              <input
                for="title"
                type="text"
                value={enteredTitle}
                onChange={submitTitleHandler}
              ></input>
            </div>
            <div className="expenseAmount">
              <label id="amount"> Amount </label>
              <input
                for="amount"
                type="number"
                value={enteredAmount}
                onChange={submitAmountHandler}
              ></input>
            </div>
          </div>
          <div className="expenseDate">
            <label id="date"> Date </label>
            <input
              for="date"
              type="date"
              min="2019-01-01"
              max="2024-01-01"
              value={enteredDate}
              onChange={submitDateHandler}
            ></input>
          </div>
          <div className="submitExpense">
            <div>
              {" "}
              <button type="submit" id="submitBtn">
                Add Expense
              </button>
            </div>
            <div>
              <button id="cancelBtn" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
