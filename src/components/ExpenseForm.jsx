import { useState } from "react";

function ExpenseForm({ addExpense }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD"); // По умолчанию доллар

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !amount) return;
        addExpense({ id: Date.now(), text, amount: parseFloat(amount), currency });
        setText("");
        setAmount("");
        setCurrency("USD"); // Сброс валюты на дефолтную
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
            <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs text-white placeholder-gray-400"
                placeholder="Expense name"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs text-white placeholder-gray-400"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            {/* Выбор валюты */}
            <select
                className="select select-bordered w-full max-w-xs text-white bg-gray-800"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="USD">🇺🇸 USD ($)</option>
                <option value="EUR">🇪🇺 EUR (€)</option>
                <option value="RUB">🇷🇺 RUB (₽)</option>
                <option value="KZT">🇰🇿 KZT (₸)</option>
                <option value="RSD">🇷🇸 RSD (дин.)</option>
            </select>
            <button type="submit" className="btn btn-primary">➕ Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
