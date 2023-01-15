import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = ({
    netIncome,
    grossIncome,
    setNetIncome,
    setGrossIncome,
    setIncomeValue,
    incomePeriod,
    setIncomePeriod,
    calculateIncome,
    incomeValue,
}) => {
    return (
        <form className="ml-[20px] mt-[20px]">
            <h2 className="block mt-6 font-serif">
                What is your total income?
            </h2>
            <Input
                setIncomeValue={setIncomeValue}
                incomePeriod={incomePeriod}
                setIncomePeriod={setIncomePeriod}
                incomeValue={incomeValue}
            />
            <h2 className="block mt-6 font-serif">
                Please choose the income type
            </h2>
            <div className="w-5/12 flex justify-between mt-3">
                <Button
                    title="Gross income"
                    style={`border border-gray-200 h-8 rounded-md w-[48%] hover:text-green-400 shadow-md hover:border-2 hover:border-gray-300 ${
                        grossIncome && !netIncome
                            ? 'bg-green-600 text-white hover:text-white'
                            : ''
                    }`}
                    disabled={false}
                    onClick={() => {
                        setGrossIncome((state) => !state)
                        setNetIncome(false)
                    }}
                />
                <Button
                    title="Net income"
                    style={`border border-gray-200 h-8 rounded-md w-[48%] hover:text-green-400 hover:border-2 shadow-md hover:border-2 hover:border-gray-300 ${
                        netIncome && !grossIncome
                            ? 'bg-green-600 text-white hover:text-white'
                            : ''
                    }`}
                    disabled={false}
                    onClick={() => {
                        setNetIncome((state) => !state)
                        setGrossIncome(false)
                    }}
                />
            </div>
            <Button
                title="Calculate →"
                style={`border border-gray-200 h-8 mt-4 bg-gray-400 text-white rounded-md w-5/12 ${
                    (!netIncome && !grossIncome) || !incomeValue
                        ? 'disabled: cursor-not-allowed'
                        : 'bg-green-500'
                }`}
                disabled={!netIncome && !grossIncome}
                onClick={() => calculateIncome(incomePeriod)}
            />
        </form>
    )
}

export default Form
