import React, { useMemo } from "react";

function Total({ expenses }) {
  const { total, count, average } = useMemo(() => {
    const totalAmount = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const expenseCount = expenses.length;
    const averageAmount = expenseCount > 0 ? totalAmount / expenseCount : 0;

    return {
      total: totalAmount,
      count: expenseCount,
      average: averageAmount
    };
  }, [expenses]);

  return (
    <div className="total">
      <h3>Expense Summary</h3>
      <div className="amount">RWF {total.toFixed(2)}</div>
      <div className="stats">
        <div className="stat">
          <span className="stat-label">Total Expenses: </span>
          <span className="stat-value">{count}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Average Expense: </span>
          <span className="stat-value">RWF {average.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Total;