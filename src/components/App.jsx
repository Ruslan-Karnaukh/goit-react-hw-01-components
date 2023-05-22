

import { User } from './User';
import { Data } from './Data';
import { Friends } from './Friends';
import { Transactions } from './Transactions';

import user from '../userInfo/user';
import data from '../userInfo/data';
import friends from '../userInfo/friends';
import transactions from '../userInfo/transactions';





export const App = () =>{
    return(
        <div>
   <User 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}/>

  <Data title="Upload stats" props={data}/>

  <Friends friends={friends}/>

  <Transactions props={transactions}/>
        </div>
    )
 
}


;
