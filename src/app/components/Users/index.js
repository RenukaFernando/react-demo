import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserListing from "./UserListing";
import UserDetails from "./UserDetails";
import PageNotFound from "../Error/PageNotFound";
import UserCreate from "./UserCreate";

const Users = () => {
    return (
        <Switch>
            <Route exact path="/users" component={UserListing}/>
            <Route path="/users/create" component={UserCreate}/>
            <Route path="/users/:user_uuid/" component={UserDetails}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

export default Users;