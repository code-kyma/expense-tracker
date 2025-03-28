import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState(() => {
        // Загружаем сохраненные данные из localStorage при старте
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    // Подсчет суммы расходов по валютам
    const totalByCurrency = expenses.reduce((acc, expense) => {
        acc[expense.currency] = (acc[expense.currency] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-green-600 text-white p-6 flex-grow">
            <h1 className="text-4xl font-bold mb-4">💰 Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

            <h2 className="text-2xl font-semibold mt-4">💸 Total Expenses:</h2>
            <div className="mt-2">
                {Object.entries(totalByCurrency).map(([currency, total]) => (
                    <p key={currency} className="text-lg font-medium">
                        {total.toFixed(2)} {currency}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;
