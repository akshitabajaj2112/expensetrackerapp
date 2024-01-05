import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ incomes, expenses, onDelete, onEdit }) => {
  return (
    <ul id="transaction-list">
      {[...incomes, ...expenses].map((amount, index) => (
        <TransactionItem
          key={index}
          index={index}
          amount={amount}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
