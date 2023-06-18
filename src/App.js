// import { tab } from "@testing-library/user-event/dist/tab";
import "./App.css";
import ExpenseTab from "./components/expenses/ExpenseTab";
import Input from "./components/expenses/input";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import DateDropDown from "./components/expenses/DateDropDown";
import React, { useState } from "react";
import ExpensesChart from "./components/expenses/ExpensesChart";

const DummyExpenses = [
  { id: "e1", date: new Date(2020, 7, 14), title: "Television", amount: 50 },
  { id: "e2", date: new Date(2023, 0, 24), title: "Netflix", amount: 200 },
  { id: "e3", date: new Date(2021, 8, 10), title: "Shoes", amount: 120 },
  // { id: "e4", date: new Date(2022, 8, 10), title: "Haircut", amount: "$20" },
];

function App() {
  const [Expense, updateExpenses] = useState(DummyExpenses);

  const onaddtoapp = (a) => {
    // console.log(a);

    const y = { date: a.date, title: a.title, amount: a.amount, id: a.id };
    const x = DummyExpenses.unshift(y);
    updateExpenses(x);
    console.log(Expense);
    console.log(filterExpenses);
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    console.log(filteredYear);
  };

  const filterExpenses = DummyExpenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Input></Input>

      <NewExpenses onaddtoapphandler={onaddtoapp}></NewExpenses>

      <ExpensesChart expenses={filterExpenses} />

      <DateDropDown
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <div>
        {filterExpenses.length === 0 ? (
          <p id="noExpense"> No expense found! </p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseTab
              key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default App;
