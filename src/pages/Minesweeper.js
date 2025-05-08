import { useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'cell clear',
    Flagged: 'cell flag',
    Hidden: 'cell hide',
}

class Square {
    constructor(x, y) {}
    render() {}
}

class Grid {
    constructor(width, height) {}
    render() {}
}

function Minesweeper() {
    document.title = 'Minesweeper';
    const [running, setRunning] = useState(false);

    function startGame() {
        setRunning(true);
    }

    function endGame() {
        setRunning(false);
    }

    if (running) {
        return (<>
            <p>Game running</p>
            <button onClick={endGame}>Quit</button>
        </>);
    } else {
        return (<>
            <p>Game not running</p>
            <button onClick={startGame}>Start</button>
        </>);
    }
}

export default Minesweeper;
