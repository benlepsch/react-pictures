import { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
    <>
        <p>will this work? who knows</p>
        <Navigation />
        <Main />
    </>
);

const Navigation = () => (
    <>
        <NavLink to='/'> home</NavLink>
        <NavLink to='/fart'>log in</NavLink>
    </>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/fart' component={Fart}></Route>
    </Switch>
);

const Home = () => (
    <p>what is this</p>
);

const Fart = () => (
    <p>ahahaha you thought you could log in? its a static server dummy</p>
);