import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  if (!expenses.length) return <p className="no-expenses">No expenses yet. Add your first expense.</p>;

  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;