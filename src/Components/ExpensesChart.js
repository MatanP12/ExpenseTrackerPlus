import { useMemo } from "react";
// import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';


function buildExpenses(expenses) {

    return expenses.reduce((accumulator, currExpense) => {

        const currDate = currExpense.creationDate.toLocaleDateString('en-GB')
        const exisitingItem = accumulator.find((item) => item.date === currDate);
        if (exisitingItem) {
            exisitingItem.expenses += Number(currExpense.amount);
        }
        else {
            accumulator.push({ date: currDate, expenses: Number(currExpense.amount) });
        }

        return accumulator;
    }, [])
}

export default function ExpensesCharts({ expenses }) {

    const createdExpenses = useMemo(() => buildExpenses(expenses), [expenses]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={500}
                data={createdExpenses}

                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}

            >
                <XAxis dataKey="date" />
                <YAxis interval="preserveStartEnd" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />

                <Bar isAnimationActive={false} barSize={30} dataKey="expenses" fill="#8884d8" label={{ position: "top" }} />
            </BarChart>
        </ResponsiveContainer>


    )
}