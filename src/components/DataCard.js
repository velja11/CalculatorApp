import React from 'react'
import CustomDropDown from './CustomDropDown'
import Table from './Table'
import { dollarSign } from './SvgImg/SVGs'

const DataCard = ({
    incomeResult,
    incomePeriod,
    setIncomePeriod,
    calculateIncome,
    incomeValue,
}) => {
    return (
        <div className="bg-green-200 w-[95%] h-[60%] rounded-lg absolute left-0 right-0 top-[-90px] bottom-0 m-auto">
            <div className="flex relative left-5 top-4">
                <div className="flex justify-center align-middle font-bold bg-green-600 w-[20%] rounded-lg border p-4">
                    {dollarSign}
                    {incomeResult}
                </div>
                <div className="w-[100%] flex absolute left-60 top-4">
                    <span className="absolute left-[12px]">your net</span>
                    <CustomDropDown
                        incomePeriod={incomePeriod}
                        setIncomePeriod={setIncomePeriod}
                        styleLayer="text-sm absolute top-[3px] left-[80px] underline lowercase cursor-pointer"
                        calculateIncome={calculateIncome}
                    />
                    <span className="absolute left-[167px]">income</span>
                </div>
            </div>
            <Table incomeResult={incomeResult} incomeValue={incomeValue} />
        </div>
    )
}

export default DataCard
