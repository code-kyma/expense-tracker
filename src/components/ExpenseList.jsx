import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
    return (
        <div className="w-full max-w-lg">
            {expenses.length > 0 ? (
                expenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
                ))
            ) : (
                <p className="text-center text-gray-400">No expenses yet! 🏦</p>
            )}
        </div>
    );
}

export default ExpenseList;
