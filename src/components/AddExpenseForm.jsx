import React, { useState } from "react";

function AddExpenseForm({onAddExpense}) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("Other");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const amt = parseFloat(amount);
        if (!title.trim()) return setError("Enter a title");
        if (Number.isNaN(amt) || amt <= 0) return setError("Enter a valid amount");
        const expense = { title: title.trim(), amount: amt, date, category };

        onAddExpense(expense);
        setTitle("");
        setAmount("");
        setDate("");
        setCategory("Other");
        setError("");
    };
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>Transport</option>
                    <option>School</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
export default AddExpenseForm