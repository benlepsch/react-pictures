import { React, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

export default function App () {
    return (
    <>
        <p>will this work? who knows</p>
        <Navigation />
        <Main />
    </>
    );
}

const Navigation = () => (
    <>
        <NavLink to='/'> home</NavLink>
        <NavLink to='/fart'>log in</NavLink>
    </>
);

const Main = () => (
    <Routes>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/fart' component={Fart}></Route>
    </Routes>
);

const Home = () => (
    <p>what is this</p>
);

const Fart = () => (
    <p>ahahaha you thought you could log in? its a static server dummy</p>
);
