import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// vview components
import Home from './core/Home';
import Search from './core/Search';
import Signup from './core/Signup';
import Signin from './core/Signin';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/videogameById" exact component={Search} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;