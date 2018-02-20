import React from 'react';
import AccountDetails from "./AccountDetails";
import {AccoutListing} from "./AccoutListing";
import {Route, Switch} from "react-router-dom";

const Accounts = () => {
    return (
        <Switch>
            <Route exact path="/accounts" component={AccoutListing}/>
            <Route path="/accounts/:acc_uuid" component={AccountDetails}/>
        </Switch>
    );
};

export default Accounts;