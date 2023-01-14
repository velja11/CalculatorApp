import React from 'react'
import Button from './Button'

const ButtonCards = ({ incomeRes, isIncome, setIsIncome }) => {
    return (
        <div className="flex justify-start gap-5 w-[50%] translate-x-[50%] translate-y-[50%] rotate-[90deg] absolute left-[-450px] top-[125px] m-auto">
            <Button
                title="Income details"
                style={`translate-x-[50%] outline-none translate-y-[50%] rotate-[180deg] w-[30%] border border-gray-100 h-8 bg-white px-2 font-serif ${
                    !isIncome || !incomeRes ? 'bg-green-400' : ''
                }`}
                disabled={false}
                onClick={() => setIsIncome(false)}
            />
            <Button
                title="Income"
                style={`translate-x-[50%] outline-none translate-y-[50%] rotate-[180deg] w-[30%] border border-gray-100 h-8 bg-white px-2 font-serif ${
                    incomeRes && isIncome ? 'bg-green-400' : ''
                }`}
                disabled={false}
                onClick={() => setIsIncome(true)}
            />
        </div>
    )
}

export default ButtonCards
