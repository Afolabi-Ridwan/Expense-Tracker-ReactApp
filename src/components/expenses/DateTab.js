import "./DateTab.css";
import Cards from "../UI/Cards";

function DateTab(prop) {
  const month = prop.date.toLocaleString("en-US", { month: "long" });
  const day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  const year = prop.date.getFullYear();
  return (
    <Cards className="date">
      <div className="month"> {month} </div>
      <div className="year"> {year} </div>
      <div className="day"> {day}</div>
    </Cards>
  );
}

export default DateTab;
