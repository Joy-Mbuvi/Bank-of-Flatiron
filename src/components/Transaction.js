import React from "react";
import axios from "axios";

function Transaction({transaction,getTransactions}) {
  
  function handleDelete(e)
  {
    console.log(transaction.id)
    axios.delete(`http://localhost:8001/transactions/${transaction.id}`)
    .then(res=>{console.log("data successfully",res.data);getTransactions()})
    .catch(err=>console.log("error deleting",err))
  }

  return (
    <tr key={transaction.id}>
      <td>{transaction.date }</td>
      <td>{ transaction.description}</td>
      <td>{ transaction.category}</td>
      <td>{ transaction.amount}</td>
      <td><button onClick={handleDelete}>delete</button></td>
    </tr>
  );
}

export default Transaction;
  
  
  


