import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from './Carousels';
import Signup from "./Signup";
import Login from './Login';
import Booking from './Frame8';
import Account from './account';
import Points from './Points';
import FAQ from './FAQ';
import Info from './Info';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Login" component={Login} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/account" component={Account} />
                    <Route path="/Points" component={Points} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/Info" component={Info} />
                </Switch>
            </Router>
        )
    }
}