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

function Caption() {
    return (<p>goo goo ga ga</p>);
}

export default function Frame() {
    const [pn, setPn] = useState(0);
    
    let pics = [];
    const picHolder = document.querySelectorAll('.image');
    // console.log(picHolder);

    for (let i = 0; i < picHolder.length; i++) {
        // console.log('adding picture: ' + picHolder[i].src);
        pics.push(picHolder[i].src);
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


    return (
        <div class="flexy flex-col">
            <img alt="" src={pics[pn]} />
            <Caption /> 
            <div class="flexy flex-row">
                <Arrow text={"Back"} handleClick={dec} />
                <Arrow text={"Forward"} handleClick={inc} />
            </div>
        </div>
    );
}
