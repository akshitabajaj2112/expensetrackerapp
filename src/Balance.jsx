// Balance.js

import React from 'react';

const Balance = ({ incomes, expenses }) => {
  const calculateBalance = () => {
    const totalIncome = incomes.reduce((total, amount) => total + (typeof amount === 'number' ? amount : 0), 0);
    const totalExpense = expenses.reduce((total, amount) => total + (typeof amount === 'number' ? amount : 0), 0);

    return {
      balance: totalIncome + totalExpense,
      totalIncome,
      totalExpense,
    };
  };

  const { balance, totalIncome, totalExpense } = calculateBalance();

  return (
    <div>
      <div className="balance">
        <h3>Your Balance</h3>
        <div id="balance">Balance: ${balance.toFixed(2)}</div>
      </div>

      <div id="inc-exp-container">
        <div className="money-plus">
          +${totalIncome.toFixed(2)}
        </div>
        <div className="money-minus">
          -${Math.abs(totalExpense).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Balance;






