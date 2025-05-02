import { React } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Frame } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Main />
        </BrowserRouter>
    );
}

function Navigation() {
    return (
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/fart'>log in</Link></li>
        </ul>
    );
}

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<Frame/>}></Route>
            <Route exact path='/fart' element={<Fart/>}></Route>
        </Routes>
    );
}

function Fart() {
    return (
        <p>ahahaha you thought you could log in? its a static server dummy</p>
    );
}


export default App;
