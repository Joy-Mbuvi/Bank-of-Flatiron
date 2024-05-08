import React,{useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ getTransactions, transactions,setTransactions }) {
  const [query,setQuery] = useState("")
  // const filteredtransactions=(){
  //   transactions.filter((transaction)=>query.toLowerCase()==""?transaction:
  //   transaction.description.toLowerCase().includes(query))
  // }



  return (
    <div>
      <Search query={query} setQuery={setQuery}/>
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} getTransactions={getTransactions}/>
      <TransactionsList getTransactions={getTransactions} setTransactions={setTransactions} 
      transactions={transactions.reverse()} query={query} setQuery={setQuery}  />
    </div>
  );
}

export default AccountContainer;