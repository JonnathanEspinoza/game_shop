import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// vview components
import Home from './core/Home';
import Search from './core/Search';
import Signup from './core/Signup';
import SignupForm from './core/SignupForm';
import Signin from './core/Signin';
import SigninForm from './core/SigninForm';
import AddCategory from './core/AddCategory';
import AddVideogame from './core/AddVideogame';
import Videogame from './core/Videogame';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/videogame/:videogameId" exact component={Videogame} />
                <Route path="/signin" exact component={SigninForm} />
                <Route path="/signup" exact component={SignupForm} />
                <Route path="/addcategory" exact component={AddCategory} />
                <Route path="/addvideogame" exact component={AddVideogame} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;