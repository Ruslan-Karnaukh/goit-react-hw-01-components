import PropTypes from 'prop-types';
export function  Friends ({props})  {
    return (
     <div className="container">
           <ul className="friend-list">
            {props.map(({id, name, avatar, isOnline}) =>{
                return(
                    <li className="item" key={id}>
                    <span className={
                        isOnline ? 
                        "status-online" : 
                        "status-offline"}>
                    </span>
                    <img src={avatar} alt={name} className="avatar" style={{width:"40px", heigth:"40px"}}/>
                    <p className="name">{name}</p>
                  </li>
                )
            })}
     
        </ul>
     </div>
    )
}

Friends.propTypes = {
    props: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };