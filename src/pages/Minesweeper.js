import { React } from 'react';

// function Board() {

// }

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
            <button onclick={endGame}>Quit</button>
        </>);
    } else {
        return (<>
            <p>Game not running</p>
            <button onclick={startGame}>Start</button>
        </>);
    }
}

export default Minesweeper;