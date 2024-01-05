import React, { useState } from "react";
import Balance from "./Balance";
import TransactionList from "./TransactionList";

function App() {
  const [incomes, setIncomes] = useState(
    JSON.parse(localStorage.getItem("incomes")) || []
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [balance, setBalance] = useState(0);
  const [textdescInput, setTextdescInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);

  const calculateBalance = () => {
    const totalIncome = incomes.reduce((total, amount) => total + amount, 0);
    const totalExpense = expenses.reduce((total, amount) => total + amount, 0);
    return totalIncome + totalExpense;
  };

  const updateLocalStorage = () => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  const updateBalance = () => {
    const newBalance = calculateBalance();
    setBalance(newBalance);
  };

  const updateTransactionList = () => {
    // Update income display
    const totalIncome = incomes.reduce((total, amount) => total + amount, 0);
    const incomeContainer = document.getElementById("money-plus");
    if (incomeContainer) {
      incomeContainer.textContent = `+$${totalIncome.toFixed(2)}`;
    }

    // Update expense display
    const totalExpense = expenses.reduce((total, amount) => total + amount, 0);
    const expenseContainer = document.getElementById("money-minus");
    if (expenseContainer) {
      expenseContainer.textContent = `-$${Math.abs(totalExpense).toFixed(2)}`;
    }
  };

  const addTransaction = () => {
    const textdescInput = document.getElementById("description").value;
    const amountInput = document.getElementById("amount").value;

    const amount = parseFloat(amountInput);

    if (isNaN(amount) || textdescInput === "") {
      alert("Please enter a valid value and a right description");
      return;
    }

    if (amount >= 0) {
      setIncomes([...incomes, amount]);
    } else {
      setExpenses([...expenses, amount]);
    }

    updateLocalStorage();
    updateTransactionList();
    updateBalance();
    // console.log('updated')

    // Clear input values
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  };

  const deleteTransaction = (index) => {
    if (index >= 0 && index < incomes.length) {
      setIncomes([...incomes.slice(0, index), ...incomes.slice(index + 1)]);
    } else if (
      index >= incomes.length &&
      index < incomes.length + expenses.length
    ) {
      setExpenses([
        ...expenses.slice(0, index - incomes.length),
        ...expenses.slice(index - incomes.length + 1),
      ]);
    }

    updateTransactionList();
    updateLocalStorage();
  };

  const editTransaction = (index, editedAmount) => {
    if (index >= 0 && index < incomes.length) {
      // Editing an income transaction
      const updatedIncomes = [...incomes];
      updatedIncomes[index] = editedAmount;
      setIncomes(updatedIncomes);
    } else if (index >= incomes.length && index < incomes.length + expenses.length) {
      // Editing an expense transaction
      const updatedExpenses = [...expenses];
      updatedExpenses[index - incomes.length] = editedAmount;
      setExpenses(updatedExpenses);
    }

    updateTransactionList();
    updateLocalStorage();
    updateBalance();
    console.log(`Edit transaction at index ${index}`);
  };


  return (
    <>
      <div>
        <h1>Expense Tracker App</h1>
      </div>

      <Balance incomes={incomes} expenses={expenses} />

      <TransactionList
        incomes={incomes}
        expenses={expenses}
        onDelete={deleteTransaction}
        onEdit = {editTransaction}
      />

      <h4>Add Transactions here: </h4>
      <div className="form-control">
        <label htmlFor="description">Text</label>
        <input
          type="text"
          id="description"
          value={textdescInput}
          onChange={(e) => setTextdescInput(e.target.value)}
          placeholder="Enter text..."
        />
      </div>

      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          id="amount"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>

      <button className="btn" onClick={addTransaction}>
        Add Transaction
      </button>
    </>
  );
}

export default App;
