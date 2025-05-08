import { useState } from 'react';

import './minesweeper.css';

const Vis = {
    Cleared: 'cell clear',
    Flagged: 'cell flag',
    Hidden: 'cell hide',
}

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vis = Vis.Hidden;
        this.bomb = false;
        this.number = '';

        // generate list of neighbors
        this.neighbors = [];
    }

    addNeighbor(ref) {
        this.neighbors.push(ref);
    }

    handleClick(e) {
        e.preventDefault();
        
        if (e.type === 'click') {
            if (this.vis !== Vis.Flagged) {
                this.vis = Vis.Cleared;
            }
        } else if (e.type === 'contextmenu') {
            if (this.vis === Vis.Flagged) {
                this.vis = Vis.Hidden;
            } else if (this.vis !== Vis.Cleared) {
                this.vis = Vis.Flagged;
            }
        }
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                onContextMenu={this.handleClick}
                class={this.vis}
            >
                {this.number}
            </div>
        );
    }
}

class Grid {
    constructor(width, height, bombs) {
        this.width = width;
        this.height = height;
        this.bombs = bombs;

        this.cells = [];
        for (let i = 0; i < width; i++) {
            this.cells.push([]);

            for (let j = 0; j < height; j++) {
                this.cells[i].push(new Square(i, j));
            }
        }
    }

    render() {
        let cols = [];

        for (let i = 0; i < this.width; i++) {
            cols.push([]);

            for (let j = 0; j < this.height; j++) {
                cols[i].push(this.cells[i][j].render());
            }
        }

        return (
            <div class="board">

            </div>
        );
    }
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
