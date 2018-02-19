import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Users from "./app/components/Users/index";
import PageNotFound from "./app/components/Error/PageNotFound";

export default class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/users" />
                    <Route path="/users" component={Users}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}