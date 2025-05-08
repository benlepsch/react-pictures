import { React, useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'clear',
    Flagged: 'flag',
    Hidden: 'hide',
}

function Cell({ x, y, bombs, vis, handleClick }) {
    const [style, setStyle] = useState('cell ' + vis[x][y]);

    let number = 'B';
    let num_temp = 0;
    if (!bombs[x][y]) {
        const lx = (x == 0) ? x : x - 1;
        const hx = (x == bombs.length-1) ? x + 1 : x + 2;
        const ly = (y == 0) ? y : y - 1;
        const hy = (y == bombs[0].length-1) ? y + 1 : y + 2;

        // console.log('i am square (' + x + ',' + y + ') checking ' + lx + ' to ' + hx + ' and ' + ly + ' to ' + hy);

        for (let i = lx; i < hx; i++) {
            for (let j = ly; j < hy; j++) {
                num_temp += bombs[i][j];
            }
        }
        
        if (num_temp !== 0) {
            number = num_temp.toString();
        } else {
            number = '';
        }
    }
    
    const clicked = (e) => {
        e.preventDefault();
        handleClick(e, this);
    }

    return (
        <div 
            onClick={clicked} 
            onContextMenu={clicked}
            class={style}
        >
            {number}
        </div>
    );
}

function Col({ x, height, bombs, vis, handleClick }) {
    const cells = [];

    for (let j = 0; j < height; j++) {
        cells.push(<Cell x={x} y={j} bombs={bombs} vis={vis} handleClick={handleClick} />);
    }

    return <div class="column">{cells}</div>;
}

function Board({ width, height }) {
    function handleClick(event, cell) {
        if (event.type === 'click') {
            if (vis[cell.x][cell.y] !== Vis.Flagged) {
                vis[cell.x]cell.[y] = Vis.Cleared;
            }
        } else if (event.type === 'contextmenu') {
            if (vis[cell.x][cell.y] === Vis.Flagged) {
                vis[cell.x][cell.y] = Vis.Hidden;
            } else if (vis[cell.x][cell.y] !== Vis.Cleared) {
                vis[cell.x][cell.y] = Vis.Flagged;
            }
        }

        cell.setStyle('cell ' + vis[cell.x][cell.y]);
    }

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

    bombs[0][0] = true;
    bombs[2][4] = true;
    bombs[4][4] = true;
    bombs[0][7] = true;
    bombs[0][8] = true;

    for (let i = 0; i < width; i++) {
        board.push(<Col x={i} height={height} bombs={bombs} vis={vis} handleClick={handleClick} />);
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
