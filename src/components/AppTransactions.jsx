export const AppTransactions =  ({props}) =>{
    return(
      <div className="container">
               <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   {props.map(({id, type, amount, currency}) =>{
    return(
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
   })}
  </tbody>
</table>
      </div>
    )
}