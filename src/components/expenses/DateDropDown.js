import "./DateDropDown.css";

const DateDropDown = (prop) => {
  const dropdownChangeHandler = (event) => {
    prop.onChangeFilter(event.target.value);
  };

  return (
    <div id="filterYear">
      <div>
        <h3>Filter by year</h3>
      </div>
      <div>
        <select value={prop.selected} onChange={dropdownChangeHandler}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </div>
  );
};

export default DateDropDown;
