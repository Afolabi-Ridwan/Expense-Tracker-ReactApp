// import "./components/ExpenseTab.css";

import React from "react";
import "./ExpenseTab.css";
import DateTab from "./DateTab";
import Cards from "../UI/Cards";

function ExpenseTab(prop) {
  return (
    <div>
      <div className="tab">
        <div className="date">
          <DateTab date={prop.date} />
        </div>
        <h3 className="title"> {prop.title} </h3>
        <Cards className="amount"> {"$" + prop.amount} </Cards>
      </div>
    </div>
  );
}

export default ExpenseTab;
