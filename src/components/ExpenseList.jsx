import React from "react";
import ExpenseItem from "./ExpenseItem"

function ExpenseList () {
    if (!Expenses.lenght) return <p>No expenses yet. Add your first expense. </p>

    return (
        <ul className="expense-list">
            {Expenses.map((exp) => (
                <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default ExpenseList