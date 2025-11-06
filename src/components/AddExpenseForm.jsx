import React, { useState } from "react";

function AddExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Other");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    
    if (!title.trim()) return setError("Please enter a title for your expense");
    if (Number.isNaN(amt) || amt <= 0) return setError("Please enter a valid amount greater than 0");
    if (!date) return setError("Please select a date");

    const expense = { 
      title: title.trim(), 
      amount: amt, 
      date, 
      category 
    };

    onAddExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Other");
    setError("");
    setSuccess("Expense added successfully!");
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <div className="form-grid">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Expense Title" 
        />
        <input 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount" 
          type="number"
          step="0.01"
        />
        <input 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          type="date" 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="School">School</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit">Add Expense</button>
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </form>
  );
}

export default AddExpenseForm;