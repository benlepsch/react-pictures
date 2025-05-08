import { useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'cell clear',
    Flagged: 'cell flag',
    Hidden: 'cell hide',
}

function Cell({ x, y, bomb, close, handleClick }) {
    let number = (bomb) ? 'B' : (close == 0) ? '' : close.toString();
    
    const clicked = (e) => {
        e.preventDefault();
        handleClick(e, x, y);
    }

    const id = x.toString() + 'x' + y.toString() + 'y';
    return (
        <div 
            onClick={clicked} 
            onContextMenu={clicked}
            class={Vis.Hidden}
            id={id}
        >
            {number}
        </div>
    );
}

function Col({ x, height, bombs, nums, handleClick }) {
    const cells = [];

    for (let j = 0; j < height; j++) {
        cells.push(<Cell x={x} y={j} bomb={bombs[j]} close={nums[j]} handleClick={handleClick} />);
    }

    return <div class="column">{cells}</div>;
}

function Board({ width, height }) {
    function handleClick(event, x, y) {
        if (event.type === 'click') {
            if (vis[x][y] !== Vis.Flagged) {
                vis[x][y] = Vis.Cleared;
            }
        } else if (event.type === 'contextmenu') {
            if (vis[x][y] === Vis.Flagged) {
                vis[x][y] = Vis.Hidden;
            } else if (vis[x][y] !== Vis.Cleared) {
                vis[x][y] = Vis.Flagged;
            }
        }

        document.getElementById(x + 'x' + y + 'y').classList.value = vis[x][y];
    }

    const vis = [];
    const bombs = [];
    const numbers = [];
    const board = [];

    for (let i = 0; i < width; i++) {
        let visCol = [];
        let bombsCol = [];
        let numsCol = [];

        for (let j = 0; j < height; j++) {
            visCol.push(Vis.Hidden);
            bombsCol.push(false);
            numsCol.push(0);
        }

        vis.push(visCol);
        bombs.push(bombsCol);
        numbers.push(numsCol);
    }

    function addBomb(x, y) {
        bombs[x][y] = true;

        // update adjacent squares
        const lx = (x == 0) ? x : x - 1;
        const hx = (x == bombs.length-1) ? x + 1 : x + 2;
        const ly = (y == 0) ? y : y - 1;
        const hy = (y == bombs[0].length-1) ? y + 1 : y + 2;

        for (let i = 0; i < lx; i++) {
            for (let j = 0; j < ly; j++) {
                if ((i !== x) && (j !== y)) {
                    numbers[i][j] += 1;
                }
            }
        }
    }

    addBomb(0, 0);
    addBomb(2, 4);
    addBomb(4, 4);
    addBomb(0, 7);
    addBomb(0, 8);
    addBomb(6, 0);

    for (let i = 0; i < width; i++) {
        board.push(<Col x={i} height={height} bombs={bombs[i]} nums={numbers[i]} handleClick={handleClick} />);
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
