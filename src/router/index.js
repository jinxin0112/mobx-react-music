import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from '../page/Home';
import Setting from '../page/Setting';
class RouteElement extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} exact={true}/>
                <Route path="/setting" component={Setting}/>
                <Redirect to="/home"/>
            </Switch>
        );
    }
}

export default RouteElement;