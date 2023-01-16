import React from 'react'
import convertFunction from './convertFunction'

const Table = ({ incomeValue, incomeResult, grossIncome, incomePeriod }) => {
    let weekly = grossIncome
        ? `${(convertFunction(incomeValue) * 0.61).toFixed(2)}`
        : `${(convertFunction(incomeValue) * 0.4).toFixed(2)}`
    let fortnightly = grossIncome
        ? `${(convertFunction(incomeValue) * 0.68).toFixed(2)}`
        : `${(convertFunction(incomeValue) * 0.43).toFixed(2)}`
    let monthly = grossIncome
        ? `${(convertFunction(incomeValue) * 0.7).toFixed(2)}`
        : `${(convertFunction(incomeValue) * 0.46).toFixed(2)}`
    let annualy = grossIncome
        ? `${(convertFunction(incomeValue) * 0.73).toFixed(2)}`
        : `${(convertFunction(incomeValue) * 0.49).toFixed(2)}`

    let weeklyGross, fortnightlyGross, monthlyGross, annualyGross

    switch (incomePeriod) {
        case 'Weekly':
            weeklyGross = convertFunction(incomeValue)
            fortnightlyGross = (convertFunction(incomeValue) * 2).toFixed(2)
            monthlyGross = (convertFunction(incomeValue) * 3).toFixed(2)
            annualyGross = (convertFunction(incomeValue) * 4).toFixed(2)
            break
        case 'Fortnightly':
            weeklyGross = (convertFunction(incomeValue) / 2).toFixed(2)
            fortnightlyGross = convertFunction(incomeValue)
            monthlyGross = (convertFunction(incomeValue) * 2).toFixed(2)
            annualyGross = (convertFunction(incomeValue) * 3).toFixed(2)
            break
        case 'Monthly':
            weeklyGross = (convertFunction(incomeValue) / 3).toFixed(2)
            fortnightlyGross = (convertFunction(incomeValue) / 2).toFixed(2)
            monthlyGross = convertFunction(incomeValue)
            annualyGross = (convertFunction(incomeValue) * 2).toFixed(2)
            break
        case 'Annualy':
            weeklyGross = (convertFunction(incomeValue) / 4).toFixed(2)
            fortnightlyGross = (convertFunction(incomeValue) / 3).toFixed(2)
            monthlyGross = (convertFunction(incomeValue) / 2).toFixed(2)
            annualyGross = convertFunction(incomeValue)
            break
    }

    return (
        <table className="w-[95%] absolute left-0 right-0 top-[80px] bottom-0 m-auto rounded-md text-sm text-left text-black">
            <thead className="text-xs text-black uppercase bg-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Frequency
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Gross income
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tax
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Net income
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b border-t hover:bg-green-300">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900"
                    >
                        Weekly
                    </th>
                    <td className="px-6 py-4">${weeklyGross}</td>
                    <td className="px-6 py-4">
                        ${(incomeResult * 0.15).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">${weekly}</td>
                </tr>
                <tr className="bg-white border-b hover:bg-green-300">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        Fortnightly
                    </th>
                    <td className="px-6 py-4">${fortnightlyGross}</td>
                    <td className="px-6 py-4">
                        ${(incomeResult * 0.17).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">${fortnightly}</td>
                </tr>
                <tr className="bg-white border-b hover:bg-green-300">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        Monthly
                    </th>
                    <td className="px-6 py-4">${monthlyGross}</td>
                    <td className="px-6 py-4">
                        ${(incomeResult * 0.19).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">${monthly}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-green-300">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        Annualy
                    </th>
                    <td className="px-6 py-4">${annualyGross}</td>
                    <td className="px-6 py-4">
                        ${(incomeResult * 0.2).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">${annualy}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
