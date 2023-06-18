import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpenses = (prop) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(newExpenseData);
    prop.onaddtoapphandler(newExpenseData);
  };

  let condition;

  function onSubmitBtn() {
    updatePage(page);
  }

  const cancelBtnHandler = () => {
    // alert("clicked");
    updatePage(addNewExpenseBtn);
  };
  const addNewExpenseBtn = (
    <div className="submitBtnContainer">
      <button onClick={onSubmitBtn} type="submit" id="submitBtn">
        Add Expense
      </button>
    </div>
  );

  const formTab = (
    <div id="tab">
      <ExpenseForm
        cancelBtnClicked={cancelBtnHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );

  let page;
  // let page2;

  {
    condition === false ? (page = addNewExpenseBtn) : (page = formTab);
  }

  const [firstPage, updatePage] = useState(addNewExpenseBtn);

  return (
    <div>
      <div>{firstPage}</div>
    </div>
  );
};

export default NewExpenses;
