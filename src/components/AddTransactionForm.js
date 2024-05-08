import React, { useState } from "react";

function AddTransactionForm({ getTransactions}) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = {
      id: Date.now(),
      date,
      description,
      category,
      amount,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data), 
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8001/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
        getTransactions();
      })
      .catch((error) => console.error(error));
  };

  

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
