
export const  AppUser = ({username, tag, location, avatar, stats }) => {
  return (
   <div className="container">
     <div className="profile" id="1">
       <div className="description">
          <img 
            src={avatar} 
            alt={username} 
            className="avatar"/>
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
       </div>
       <ul className="stats">
        <li>
            <span className="label">Folowers</span>
            <span className="quantity">{stats.followers}</span>
        </li>
        <li>
            <span className="label">Views</span>          
            <span className="quantity">{stats.views}</span>          
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
        </li>
       </ul>
    </div>
   </div>
   
  );
};
