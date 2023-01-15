import React from 'react'
import { useState } from 'react'
import { dropArrow } from './SvgImg/SVGs'

const CustomDropDown = ({
    incomePeriod,
    setIncomePeriod,
    styleLayer,
    styleSelectField,
    calculateIncome = (x) => {},
}) => {
    const [isActive, setIsActive] = useState(false)
    const options = ['Weekly', 'Fortnightly', 'Monthly', 'Annualy']

    return (
        <div className={styleLayer}>
            <div className={styleSelectField}>
                <div
                    className="flex justify-center items-center"
                    onClick={() => setIsActive((state) => !state)}
                >
                    {incomePeriod}
                    {dropArrow}
                </div>
            </div>
            {isActive && (
                <div className="absolute bg-white shadow-2xl p-2 w-[100px] mt-1 z-10">
                    {options.map((opt) => (
                        <div
                            className={`hover:text-green-300 cursor-pointer text-center transition-all ${
                                incomePeriod == opt ? 'text-green-300' : ''
                            }`}
                            onClick={() => {
                                setIsActive(false)
                                setIncomePeriod((prevState) =>
                                    prevState.replace(prevState, opt)
                                )
                                calculateIncome(opt)
                            }}
                            key={opt}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CustomDropDown
