import { useMemo } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


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



    console.log(createdExpenses);

    return (
        <>
            Expenses
            <ResponsiveContainer >
                <BarChart data={createdExpenses} barSize={20}
                >
                    <YAxis dataKey="expenses" padding={{ top: 30 }} />
                    <XAxis dataKey="date" scale="point" padding={{ left: 40, right: 40 }} />
                    <Tooltip viewBox={{ width: 20, height: 400 }} />
                    <Bar
                        isAnimationActive={false} dataKey="expenses" fill="#413ea0" label={{ position: "top", fontSize: 15 }} />
                </BarChart>


            </ResponsiveContainer>

        </>

    )
}