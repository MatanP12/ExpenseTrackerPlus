import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { INCOME, EXPENSE } from "../utilities/Transaction";

function buildTransactions(transactions) {

    transactions.sort((a, b) => {
        return a.date - b.date;
    })

    return transactions.reduce((accumulator, currTransaction) => {

        const currDate = currTransaction.date.toLocaleDateString('en-GB', { month: "short", year: "numeric" })
        const type = currTransaction.type;
        const exisitingItem = accumulator.find((item) => item.date === currDate);
        if (exisitingItem) {

            exisitingItem[type] += Number(currTransaction.amount);
        }
        else {
            const newElement = { date: currDate, Income: 0, Expense: 0 }
            newElement[type] = Number(currTransaction.amount);
            accumulator.push(newElement);
        }

        return accumulator;
    }, [])
}

export default function TransactionsCharts({ transactions }) {

    const createdTransactions = useMemo(() => buildTransactions(transactions), [transactions]);

    console.log(createdTransactions);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={500}
                data={createdTransactions}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}

            >
                <XAxis dataKey="date" />
                <YAxis interval="preserveStartEnd" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar isAnimationActive={false} barSize={40} dataKey={INCOME} fill="#84d888" label={{ position: "top" }} />
                <Bar isAnimationActive={false} barSize={10} />
                <Bar isAnimationActive={false} barSize={40} dataKey={EXPENSE} fill="#9f9cdf" label={{ position: "top" }} />
            </BarChart>
        </ResponsiveContainer>


    )
}