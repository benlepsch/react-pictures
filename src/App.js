import { React } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Frame from './pages/Frame';

function Navigation() {
    return (
        <header class="flexy flex-row">
            <div class="flexy flex-row nav-link">
                <Link to='/'>Home</Link>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://github.com/benlepsch/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://benlepsch.github.io/ben_lepsch_resume.pdf" download>Resume</a>
            </div>
            <div class="flexy flex-row nav-link">
                <Link to='/pictures'>Pictures</Link>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://www.mountainproject.com/user/201776606/ben-lepsch" target="_blank" rel="noopener noreferrer">Mountain Project</a>
            </div>
            <div class="flexy flex-row nav-link">
                <a href="https://sbcord.com/" target="_blank" rel="noopener noreferrer">Friends</a>
            </div>
        </header>
    );
}

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/pictures' element={<Frame/>}></Route>
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