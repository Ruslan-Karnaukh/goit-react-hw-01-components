export const AppData = ({props}) => {
    
    return (
       <div className="container">
         <section className="statistics">
            <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
        {props.map( ({id, label, percentage}) => {
        return(
              <li className="item" key={id}>
                  <span className="label">{label}</span>
                  <span className="percentage">{percentage}%</span>
              </li> 
         )})}
        </ul>
        </section>
       </div>
    )
}
