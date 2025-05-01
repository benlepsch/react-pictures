import { useState } from 'react';

function Arrow({ text, handleClick }) {
    return (
        <button
            onClick={handleClick}
            class="flexy"
        >
           {text}
        </button>
    );
}

function Caption({ text }) {
    return (<p class="flexy">{text}</p>);
}

export default function Frame() {
    const [pn, setPn] = useState(0);
    
    let pics = [];
    let alts = [];
    const picHolder = document.querySelectorAll('.image');
    // console.log(picHolder);

    for (let i = 0; i < picHolder.length; i++) {
        // console.log('adding picture: ' + picHolder[i].src);
        pics.push(picHolder[i].src);
        alts.push(picHolder[i].alt);
    }
    
    function inc() {
        const next = (pn < picHolder.length - 1) ? pn + 1 : 0;
        setPn(next);
        // console.log('adding to pn, now ' + pn);
    }

    function dec() {
        const next = (pn > 0) ? pn - 1 : pics.length - 1;
        setPn(next);
        // console.log('subtracting from pn, now ' + pn);
    }

    function rand() {
        const next = Math.floor(Math.random() * pics.length);
        setPn(next);
    }


    return (
    <>
        <div class="flexy flex-col container">
            <img class="flexy" alt={alts[pn]} src={pics[pn]} />    
            <Caption text={alts[pn]} /> 
            <div class="flexy flex-row wide">
                <Arrow text={"Back"} handleClick={dec} />
                <Arrow text={"Random"} handleClick={rand} />
                <Arrow text={"Next"} handleClick={inc} />
            </div>
        </div>
    </>
    );
}
