import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserListing from "./UserListing";
import UserDetails from "./UserDetails";

const Users = () => {
    <Switch>
        <Route exact path="/users" component={UserListing}/>
        <Route path="/users:user_uuid" component={UserDetails}/>
    </Switch>
};

export default Users;