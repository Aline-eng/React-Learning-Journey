import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";

const LOCAL_KEY = "expense_tracker_v1";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      try {
        const parsedExpenses = JSON.parse(raw);
        // Ensure all expenses have proper date formatting
        const formattedExpenses = parsedExpenses.map(expense => ({
          ...expense,
          date: expense.date || new Date().toISOString().split('T')[0]
        }));
        setExpenses(formattedExpenses);
      } catch (error) {
        console.error("Error loading expenses from localStorage:", error);
        setExpenses([]);
      }
    }
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = { 
      ...expense, 
      id: Date.now().toString(),
      date: expense.date || new Date().toISOString().split('T')[0]
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddExpenseForm onAddExpense={addExpense} />
                <Total expenses={expenses} />
                <ExpenseList expenses={expenses} onDelete={deleteExpense} />
              </>
            }
          />
          <Route
            path="/add"
            element={<AddExpenseForm onAddExpense={addExpense} />}
          />
          <Route
            path="/list"
            element={
              <ExpenseList expenses={expenses} onDelete={deleteExpense} />
            }
          />
          <Route path="/total" element={<Total expenses={expenses} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;