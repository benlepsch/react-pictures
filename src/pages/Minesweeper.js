import { useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'cell clear',
    Flagged: 'cell flag',
    Hidden: 'cell hide',
}

class Square {
    constructor(x, y, handleClick) {
        this.x = x;
        this.y = y;
        this.vis = Vis.Hidden;
        this.bomb = false;
        this.number = '';
        this.handleClick = handleClick;

        // generate list of neighbors
        this.neighbors = [];
    }

    addNeighbor(ref) {
        this.neighbors.push(ref);
    }

    render() {
        return (
            <div
                onClick={clicked}
                onContextMenu={clicked}
                class={this.vis}
            >
                {this.number}
            </div>
        );
    }
}

class Grid {
    constructor(width, height, bombs) {

    }

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
