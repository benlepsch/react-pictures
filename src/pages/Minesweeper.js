import { React, useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'clear',
    Flagged: 'flag',
    Hidden: 'hide',
}

function Cell({ x, y, bombs, vis }) {
    const [style, setStyle] = useState('cell ' + vis[x][y]);

    const clicked = (e) => {
        e.preventDefault();
        console.log(e.type);
        if (e.type === 'click') {
            if (vis[x][y] !== Vis.Flagged) {
                vis[x][y] = Vis.Cleared;
            }
        } else if (e.type === 'contextmenu') {
            if (vis[x][y] === Vis.Flagged) {
                vis[x][y] = Vis.Hidden;
            } else if (vis[x][y] !== Vis.Cleared) {
                vis[x][y] = Vis.Flagged;
            }
        }

        setStyle('cell ' + vis[x][y]);
    }

    return (
        <div 
            onClick={clicked} 
            onContextMenu={clicked}
            class={style}
        >
        </div>
    );
}

function Col({ x, height, bombs, vis }) {
    const cells = [];

    for (let j = 0; j < height; j++) {
        cells.push(<Cell x={x} y={j} bombs={bombs} vis={vis} />);
    }

    return <div class="column">{cells}</div>;
}

function Board({ width, height }) {
    const vis = [];
    const bombs = [];
    const board = [];

    for (let i = 0; i < width; i++) {
        let visCol = [];
        let bombsCol = [];

        for (let j = 0; j < height; j++) {
            visCol.push(Vis.Hidden);
            bombsCol.push(false);
        }

        vis.push(visCol);
        bombs.push(bombsCol);
    }

    for (let i = 0; i < width; i++) {
        board.push(<Col x={i} height={height} bombs={bombs} vis={vis} />);
    }

    return <div class="board">{board}</div>;
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
