import { React } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Frame from './pages/Frame';
import Minesweeper from './pages/Minesweeper';
import PageNotFound from './pages/404';

function Navigation() {

   return (
        <header class="flexy flex-row">
            <div class="flexy flex-row nav-link">
                <Link to='/'>Home</Link>
            </div>
            <div class="flexy flex-row nav-link">
                <Link to='/pictures'>Pictures</Link>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://sbcord.com/" target="_blank" rel="noopener noreferrer">Friends</a>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://bleps.ch/">Back to main website</a>
            </div>
        </header>
    );
}

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/pictures' element={<Frame />}></Route>
            <Route exact path='/minesweeper' element={<Minesweeper />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Main />
        </BrowserRouter>
    );
}

export default App;
