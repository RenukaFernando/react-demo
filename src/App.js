import React from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import Users from "./app/components/Users/index";
import PageNotFound from "./app/components/Error/PageNotFound";
import Accounts from "./app/components/Accounts/index";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/accounts">Accounts</Link></li>
                    </ul>

                    <Switch>
                        {/*<Redirect exact from="/" to="/users" />*/}
                        <Route path="/accounts" component={Accounts}/>
                        <Route path="/users" component={Users}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}