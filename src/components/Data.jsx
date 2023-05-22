import PropTypes from 'prop-types';
export  function Data ({props, title}) {
    
    return (
       <div className="container">
         <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
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

Data.propTypes = {
    title: PropTypes.string,
    props: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };