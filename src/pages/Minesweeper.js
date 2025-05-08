import { React, useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'clear',
    Flagged: 'flag',
    Hidden: 'hide',
}

function Cell({ x, y, bombs, vis }) {
    const style = 'cell ' + vis[x][y];

    return <div class={style}></div>;
}

function Row({ j, width, bombs, vis }) {
    const cells = [];

    for (let i = 0; i < width; i++) {
        cells.push(<Cell x={i} y={j} bombs={bombs} vis={vis} />);
    }

    return <>{cells}</>;
}

function Board({ width, height }) {
    const vis = [[]];
    const bombs = [[]];
    const board = [];

    for (let j = 0; j < height; j++) {
        const visRow = [];
        const bombsRow = [];

        for (let i = 0; i < width; i++) {
            visRow.push(Vis.Hidden);
        }
    }

    for (let j = 0; j < height; j++) {
        board.push(<Row width={width} j={j} bombs={bombs} vis={vis} />);
    }

    return <>{board}</>;
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
            <Board width={10} height={10} />
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
