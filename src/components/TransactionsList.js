import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, setTransactions,query,getTransactions,setQuery }) {

  const handleSort = (e) => {
    console.log(e.target.checked);
    const checkbox = e.target.checked;
    const tosort = e.target.value.toLowerCase();

    let sortedTransactions;
    if (checkbox) {
        sortedTransactions = [...transactions].sort((a, b) => {
            const valueA = typeof(a[tosort]) !== "number" ? String(a[tosort]).toLowerCase() : a[tosort];
            const valueB = typeof(b[tosort]) !== "number" ? String(b[tosort]).toLowerCase() : b[tosort];
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            }
            return 0;
        });
    } else {
        sortedTransactions = [...transactions].sort((a, b) => {
            const valueA = typeof(a[tosort]) !== "number" ? String(a[tosort]).toLowerCase() : a[tosort];
            const valueB = typeof(b[tosort]) !== "number" ? String(b[tosort]).toLowerCase() : b[tosort];
            if (valueB < valueA) {
              return -1;
          } else if (valueB > valueA) {
              return 1;
          }
          return 0;
        });
    }
    console.log(sortedTransactions);
    setTransactions(prev => sortedTransactions);
};



  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="headerss">
              Date
              <input type="checkbox" value="Date" onClick={(e)=>handleSort(e)}></input>
            </h3>
          </th>
          <th>
            <h3 className="headerss">
              Description
              <input type="checkbox" value="Description" onClick={(e)=>handleSort(e)}></input>
            </h3>
          </th>
          <th>
            <h3 className="headerss">
              Category
              <input type="checkbox" value="Category" onClick={(e)=>handleSort(e)}></input>
            </h3>
          </th>
          <th>
            <h3 className="headerss">
              Amount
              <input type="checkbox" value="Amount" onClick={(e)=>handleSort(e)}></input>
            </h3>
          </th>
        </tr>
        {transactions
            .filter((transaction) =>
              query && query.toLowerCase() === "" ? transaction : transaction.description.toLowerCase().includes(query)
              )
             .map((transaction) => (
              <Transaction getTransactions={getTransactions} key={transaction.id} transaction={transaction} />
  ))}

      </tbody>
    </table>
  );
}

export default TransactionsList;