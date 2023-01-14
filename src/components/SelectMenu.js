import React from "react";

const SelectMenu = ({
  incomePeriod,
  setIncomePeriod,
  id,
  style,
  calculateIncome,
}) => {
  return (
    <select
      id={id}
      className={style}
      onChange={(e) => {
        setIncomePeriod((prevState) =>
          prevState.replace(prevState, e.target.value)
        );
        calculateIncome();
      }}
      value={incomePeriod}
    >
      <option value="week" className="bg-white">
        Weekly
      </option>
      <option value="fortnight" className="bg-white">
        Fortnightly
      </option>
      <option value="month" className="bg-white">
        Monthly
      </option>
      <option value="annual" className="bg-white">
        Annualy
      </option>
    </select>
  );
};

export default SelectMenu;
