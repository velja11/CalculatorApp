import React from 'react'
import ButtonCards from './ButtonCards'
import Form from './Form'
import Title from './Title'
import { useState } from 'react'
import DataCard from './DataCard'
import InfoLayer from './InfoLayer'
import convertFunction from './convertFunction'

const Head = () => {
    const [grossIncome, setGrossIncome] = useState(false)
    const [netIncome, setNetIncome] = useState(false)
    const [incomeValue, setIncomeValue] = useState(null)
    const [incomePeriod, setIncomePeriod] = useState('Monthly')
    const [incomeResult, setIncomeResult] = useState(null)
    const [isIncome, setIsIncome] = useState(false)

    const calculateIncome = (period) => {
        let valueInc = 0
        if ((grossIncome || netIncome) && period == 'Weekly' && incomeValue) {
            if (grossIncome) {
                valueInc = convertFunction(incomeValue) * 0.61
            } else {
                valueInc = convertFunction(incomeValue) * 0.4
            }

            setIncomeResult(valueInc.toFixed(2))
            setIsIncome(true)
        } else if (
            (grossIncome || netIncome) &&
            period == 'Fortnightly' &&
            incomeValue
        ) {
            if (grossIncome) {
                valueInc = convertFunction(incomeValue) * 0.68
            } else {
                valueInc = convertFunction(incomeValue) * 0.43
            }
            setIncomeResult(valueInc.toFixed(2))
            setIsIncome(true)
        } else if (
            (grossIncome || netIncome) &&
            period == 'Monthly' &&
            incomeValue
        ) {
            if (grossIncome) {
                valueInc = convertFunction(incomeValue) * 0.7
            } else {
                valueInc = convertFunction(incomeValue) * 0.46
            }
            setIncomeResult(valueInc.toFixed(2))
            setIsIncome(true)
        } else if (
            (grossIncome || netIncome) &&
            period == 'Annualy' &&
            incomeValue
        ) {
            if (grossIncome) {
                valueInc = convertFunction(incomeValue) * 0.73
            } else {
                valueInc = convertFunction(incomeValue) * 0.49
            }
            setIncomeResult(valueInc.toFixed(2))
            setIsIncome(true)
        }
    }

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
                    calculateIncome={calculateIncome}
                    incomeValue={incomeValue}
                    grossIncome={grossIncome}
                />
            )}
            {incomeResult && isIncome && <InfoLayer />}
            <ButtonCards
                incomeRes={incomeResult}
                isIncome={isIncome}
                setIsIncome={setIsIncome}
            />
        </div>
    )
}

export default Head
