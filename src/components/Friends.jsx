import PropTypes from 'prop-types';
import FriendsItems from './FriendsItems';
export function  Friends ({friends})  {
    return (
     <div className="container">
           <ul className="friend-list">
            {friends.map(({ id, name, isOnline, avatar}) =>{
              return(
                <FriendsItems 
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline ? 
                "status-online" : 
                "status-offline"}
                />
              )
            })}
           
           </ul>
     </div>
    )
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
