import React from 'react'
import CustomDropDown from './CustomDropDown'

const Input = ({
    setIncomeValue,
    incomePeriod,
    setIncomePeriod,
    incomeValue,
}) => {
    return (
        <div className="relative w-5/12">
            <span className="absolute left-2 top-6">$</span>
            <CustomDropDown
                incomePeriod={incomePeriod}
                setIncomePeriod={setIncomePeriod}
                styleLayer="text-sm absolute top-[18px] right-[2px]"
                styleSelectField="p-2 bg-gray-200 text-center shadow-sm hover:cursor-pointer rounded-r-sm"
            />
            <input
                type="text"
                id="income"
                className="border-2 border-gray-200 mt-4 outline-none w-full h-10 rounded-md pl-6 focus:border-2 focus:border-green-300"
                min="0"
                placeholder="e.g. 12000"
                value={incomeValue || ''}
                onChange={(e) => {
                    let value = e.target.value
                    let removeChar = value.replace(/[^0-9\.]/g, '')
                    let removeDot = removeChar.replace(/\./g, '')
                    let formatNum = removeDot.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ','
                    )
                    setIncomeValue(formatNum)
                }}
            />
        </div>
    )
}

export default Input
