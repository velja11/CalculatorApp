import React from "react";
import CustomDropDown from "./CustomDropDown";
import SelectMenu from "./SelectMenu";

const Input = ({
  setIncomeValue,
  incomePeriod,
  setIncomePeriod,
  incomeValue,
}) => {
  return (
    <div className="relative w-5/12">
      <span className="absolute left-2 top-6">$</span>
      {/* <SelectMenu
        id="inc1"
        style="bg-gray-200 text-black text-sm absolute top-[18px] right-[2px] pl-4 pr-4 h-[28px] border-none outline-none rounded-tr rounded-br"
        setIncomePeriod={setIncomePeriod}
        incomePeriod={incomePeriod}
        calculateIncome={() => {}}
      /> */}
      <CustomDropDown
        incomePeriod={incomePeriod}
        setIncomePeriod={setIncomePeriod}
        styleLayer="text-sm absolute top-[18px] right-[2px]"
        styleSelectField="p-2 bg-gray-200 text-center shadow-sm hover:cursor-pointer rounded-r-sm"
      />
      <input
        type="number"
        id="income"
        className="border-2 border-gray-200 mt-4 outline-none w-full h-10 rounded-md pl-6 focus:border-2 focus:border-green-300"
        min="0"
        placeholder="e.g. 12000"
        value={incomeValue || ""}
        onChange={(e) => setIncomeValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
