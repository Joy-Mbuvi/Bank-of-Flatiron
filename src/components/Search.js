import React from "react";

function Search({ query, setQuery }) {
  

  

 
  // function handleChange(e){
  //   const newQuery = e.target.value.toLowerCase(); 
  //   setQuery(newQuery); 
    
  //   console.log(transactions)

    

  //   const filteredtransactions = transactions.filter((transaction)=>          
  //             transaction.description.toLowerCase().includes(newQuery) ||
  //             transaction.date.includes(newQuery) ||
  //             transaction.category.toLowerCase().includes(newQuery) ||
  //             transaction.amount.toString().includes(newQuery))
            
  
  //  filteredtransactions.length>0?setTransactions(filteredtransactions):getTransactions()
  

    
  // console.log(filteredtransactions)

  // }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e)=>setQuery(e.target.value)}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
}

export default Search;