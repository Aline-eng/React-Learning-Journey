import React from "react";

function ExpenseItem() {
    const {id, title, amount, date, category } = ExpenseItem;

    return (
        <li className="expense-item">
            <div>
                <strong>{title}</strong>
                <div className="meta">
                    {category} • {date || "No date"}
                </div>
            </div>
            <div className="right">
                <div className="amount">RWF {amount.toFixed(2)}</div>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </li>
    );
}

export default ExpenseItem