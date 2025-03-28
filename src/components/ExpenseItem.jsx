function ExpenseItem({ expense, deleteExpense }) {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-2">
            <div>
                <span className="text-lg font-semibold">{expense.text}</span>
                <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-bold text-green-400">
                    {expense.amount.toFixed(2)} {expense.currency}
                </span>
                <button onClick={() => deleteExpense(expense.id)} className="btn btn-error btn-xs">🗑</button>
            </div>
        </div>
    );
}

export default ExpenseItem;
