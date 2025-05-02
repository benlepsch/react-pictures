import { React, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <p>will this work? who knows</p>
            <Navigation />
            <Main />
        </>
    );
}

function Navigation() {
    return (
        <ul>
            <li><NavLink to='/'> home</NavLink></li>
            <li><NavLink to='/fart'>log in</NavLink></li>
        </ul>
    );
}

function Main() {
    return (
        <Routes>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/fart' component={Fart}></Route>
        </Routes>
    );
}

function Home() {
    return (
        <p>what is this</p>
    );
}

function Fart() {
    return (
        <p>ahahaha you thought you could log in? its a static server dummy</p>
    );
}


export default App;