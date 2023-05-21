import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppUser } from './components/AppUser';
import { AppData } from 'components/AppData';
import { AppFriends } from 'components/AppFriends';
import { AppTransactions } from 'components/AppTransactions';

import user from './userInfo/user';
import data from './userInfo/data';
import friends from './userInfo/friends';
import transactions from './userInfo/transactions';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppUser 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>

  <AppData props={data}/>

  <AppFriends props={friends}/>

  <AppTransactions props={transactions}/>

  </React.StrictMode>
);
