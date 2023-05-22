import PropTypes from 'prop-types';
export default function FriendsItems ({name, avatar, isOnline}){
    return(
        <li className="item">
        <span className={isOnline}></span>
        <img src={avatar} alt={name} className="avatar" style={{width:"40px", heigth:"40px"}}/>
        <p className="name">{name}</p>
      </li>
    )
}
FriendsItems.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
  };