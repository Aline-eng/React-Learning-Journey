import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Total from "./components/Total";

const LOCAL_KEY = "expense_tracker_v1";

function App() {
  const [expenses, setExpenses] = useState([]);

  //load from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) setExpenses(JSON.parse(raw));
  }, []);

  //save to localstorage whenever expenses change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    //ensure an id
    const newExpense = { ...expense, id: Date.now().toString() };
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
              element={<ExpenseList expenses={expenses} onDelete={deleteExpense} />}
            />
            <Route
              path="/total"
              element={<Total expenses={expenses} />}
            />
          </Routes>

    </main>
    </div>
  );
}

export default App
