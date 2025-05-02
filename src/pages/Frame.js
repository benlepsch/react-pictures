import { useState } from 'react';

const PICTURE_DATA = [
    { 
        src: "images/IMG_7079.jpg",
        alt: "Gorham mountain, the Beehive, sand beach, & Great Head. Acadia NP, ME",
    },
];

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

function Frame() {
    const [pn, setPn] = useState(0);

    function inc() {
        const next = (pn < PICTURE_DATA.length - 1) ? pn + 1 : 0;
        setPn(next);
        // console.log('adding to pn, now ' + pn);
    }

    function dec() {
        const next = (pn > 0) ? pn - 1 : PICTURE_DATA.length - 1;
        setPn(next);
        // console.log('subtracting from pn, now ' + pn);
    }

    function rand() {
        const next = Math.floor(Math.random() * PICTURE_DATA.length);
        setPn(next);
    }

    return (
        <div class="flexy flex-col container">
            <div class="flexy imgc">
                <img alt={PICTURE_DATA[pn].alt} src={PICTURE_DATA[pn].src} />
            </div>
            <Caption text={PICTURE_DATA[pn].alt} />
            <div class="flexy flex-row wide">
            <Arrow text={"Back"} handleClick={dec} />
                <Arrow text={"Random"} handleClick={rand} />
                <Arrow text={"Next"} handleClick={inc} />
            </div>
        </div>
    );
}

export default Frame;
