import React from "react";
import ButtonCards from "./ButtonCards";
import Form from "./Form";
import Title from "./Title";
import { useState } from "react";
import DataCard from "./DataCard";
import InfoLayer from "./InfoLayer";

const Head = () => {
  const [grossIncome, setGrossIncome] = useState(false);
  const [netIncome, setNetIncome] = useState(false);
  const [incomeValue, setIncomeValue] = useState(null);
  const [incomePeriod, setIncomePeriod] = useState("Monthly");
  const [incomeResult, setIncomeResult] = useState(null);
  const [isIncome, setIsIncome] = useState(false);

  console.log(
    "Input" + " " + incomeValue,
    isIncome,
    "Gross" + " " + grossIncome,
    "Net" + " " + netIncome,
    "Period" + " " + incomePeriod
  );

  const calculateIncome = () => {
    let valueInc = 0;
    if ((grossIncome || netIncome) && incomePeriod == "Weekly" && incomeValue) {
      if (grossIncome) {
        valueInc = incomeValue * 0.61;
      } else {
        valueInc = incomeValue * 0.4;
      }

      setIncomeResult(valueInc.toFixed(2));
      setIsIncome(true);
    } else if (
      (grossIncome || netIncome) &&
      incomePeriod == "Fortnightly" &&
      incomeValue
    ) {
      if (grossIncome) {
        valueInc = incomeValue * 0.68;
      } else {
        valueInc = incomeValue * 0.43;
      }
      setIncomeResult(valueInc.toFixed(2));
      setIsIncome(true);
    } else if (
      (grossIncome || netIncome) &&
      incomePeriod == "Monthly" &&
      incomeValue
    ) {
      if (grossIncome) {
        valueInc = incomeValue * 0.7;
      } else {
        valueInc = incomeValue * 0.46;
      }
      setIncomeResult(valueInc.toFixed(2));
      setIsIncome(true);
    } else if (
      (grossIncome || netIncome) &&
      incomePeriod == "Annualy" &&
      incomeValue
    ) {
      if (grossIncome) {
        valueInc = incomeValue * 0.73;
      } else {
        valueInc = incomeValue * 0.49;
      }
      setIncomeResult(valueInc.toFixed(2));
      setIsIncome(true);
    }
  };

  return (
    <div className="bg-white w-[900px] h-[600px] rounded-lg shadow-2xl absolute left-0 right-0 top-0 bottom-0 m-auto">
      <Title downloadBtn={incomeResult} isIncome={isIncome} />
      {(!incomeResult || !isIncome) && (
        <Form
          grossIncome={grossIncome}
          netIncome={netIncome}
          setGrossIncome={setGrossIncome}
          setNetIncome={setNetIncome}
          setIncomeValue={setIncomeValue}
          incomePeriod={incomePeriod}
          setIncomePeriod={setIncomePeriod}
          calculateIncome={calculateIncome}
          incomeValue={incomeValue}
        />
      )}
      {incomeResult && isIncome && (
        <DataCard
          incomeResult={incomeResult}
          incomePeriod={incomePeriod}
          setIncomePeriod={setIncomePeriod}
          calculateIncome={() => calculateIncome()}
          incomeValue={incomeValue}
        />
      )}
      {incomeResult && isIncome && <InfoLayer />}
      <ButtonCards
        incomeRes={incomeResult}
        isIncome={isIncome}
        setIsIncome={setIsIncome}
      />
    </div>
  );
};

export default Head;
