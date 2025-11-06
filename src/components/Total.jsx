import React, { useMemo } from "react";

function Total({expenses}) {
    const total = useMemo(
        () => expenses.reduce((s,e) => s + Number(e.amount || 0), 0),
        [expenses]
    );

    return (
        <div className="total">
            <h3>Total Spent</h3>
            <div className="amount">RWF {total.toFixed(2)}</div>
        </div>
    );
}
export default Total