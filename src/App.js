import React, { useState, useEffect } from "react";


// function App() {
//   const [incomes, setIncomes] = useState(JSON.parse(localStorage.getItem("incomes")) || []);
//   const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) || []);
//   const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) || []);

//   const [balance, setBalance] = useState(JSON.parse(localStorage.getItem("balance")) || 0);
//   const [textdescInput, setTextdescInput] = useState("");
//   const [amountInput, setAmountInput] = useState("");

  
//   useEffect(() => {
//     updateTransactionList();
//   }, [incomes, expenses]);

  

//   const calculateBalance = () => {
//     const totalIncome = incomes.reduce((total, amount) => total + amount, 0);
//     const totalExpense = expenses.reduce((total, amount) => total + amount, 0);
//     return totalIncome + totalExpense;
//   };

  

//   const updateLocalStorage = () => {
//     localStorage.setItem("incomes", JSON.stringify(incomes));
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//     localStorage.setItem("balance", JSON.stringify(calculateBalance()));
//   };

  

//   const addTransaction = () => {
//     const amount = parseFloat(amountInput);

//     if (isNaN(amount) || textdescInput === "") {
//       alert("Please enter a valid value and a right description");
//       return;
//     }

//     if (amount >= 0) {
//       setIncomes([...incomes, amount]);
//     } else {
//       setExpenses([...expenses, amount]);
//     }

//     setBalance(calculateBalance());

//     updateLocalStorage();

//     // Clear input values
//     setTextdescInput("");
//     setAmountInput("");

//     updateTransactionList();
//   };

  
//   const updateTransactionList = () => {
//     // Update income display
//     console.log(`incomes=${incomes}`)
    
//     const totalIncome = incomes.reduce((total, amount) => total + amount, 0);
//     console.log(`incomes=${incomes}`)

//     const incomeContainer = document.getElementById("money-plus");
//     incomeContainer.textContent = `+$${totalIncome.toFixed(2)}`;

//     // Update expense display
//     const totalExpense = expenses.reduce((total, amount) => total + amount, 0);
//     const expenseContainer = document.getElementById("money-minus");
//     expenseContainer.textContent = `-$${Math.abs(totalExpense).toFixed(2)}`;

//     // Update balance display
//     const totalBalance = document.getElementById("balance");
//     totalBalance.textContent = `${calculateBalance().toFixed(2)}`;

//     // Update transaction list
//     const transactionList = document.getElementById("transaction-list");
//     transactionList.innerHTML = "";



//    transactions.push([...incomes, ...expenses]);

//   };

  
//  const deleteTransaction = (index) => {
//     console.log('delete Transaction called');

//     if (index >= 0 && index < incomes.length) {
//       const updatedIncomes = [...incomes];
//       updatedIncomes.splice(index, 1);
//       setIncomes(updatedIncomes);
//     } else if (index >= incomes.length && index < incomes.length + expenses.length) {
//       const updatedExpenses = [...expenses];
//       updatedExpenses.splice(index - incomes.length, 1);
//       setExpenses(updatedExpenses);
//     }

//     setBalance(calculateBalance());
    
//     updateLocalStorage();
//   };

  

//   return (
//     <>
//       <div>
//         <h1>Expense Tracker App</h1>
//       </div>

//       <div className="balance">
//         <h3>Your Balance</h3>
//         <h4 id="balance">{balance.toFixed(2)}</h4>
//       </div>

//       <div id="inc-exp-container">
//         <div className="money-plus" id="money-plus">
//           +$0.00
//         </div>
//         <div className="money-minus" id="money-minus">
//           -$0.00
//         </div>
//       </div>

//       <h4>Transaction history :</h4>
//        <ul id="transaction-list">
//         {transactions.map((item, index) => (
//           <li key={index}>
//             {item}{' '}
//             <span>${index + 1}. Transaction: ${item.amount.toFixed(2)}</span>
//             <button onClick={() => console.log(`Button clicked for ${item}`)}>
//               Click me
//             </button>
//           </li>
//         ))}
//        </ul> 

//       <h4>Add Transactions here: </h4>

//       <div className="form-control">
//         <label htmlFor="description">Text</label>
//         <input
//           type="text"
//           id="description"
//           value={textdescInput}
//           onChange={(e) => setTextdescInput(e.target.value)}
//           placeholder="Enter text..."
//         />
//       </div>

//       <div className="form-control">
//         <label htmlFor="amount">
//           Amount <br />
//           (negative - expense, positive - income)
//         </label>
//         <input
//           type="number"
//           id="amount"
//           value={amountInput}
//           onChange={(e) => setAmountInput(e.target.value)}
//           placeholder="Enter amount..."
//         />
//       </div>

//       <button className="btn" onClick={addTransaction}>
//         Add Transaction
//       </button>

      
//     </>
//   );
// }

// export default App;


