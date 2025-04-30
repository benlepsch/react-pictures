import { useState } from 'react';

function LeftArrow({ handleClick }) {
    return (
        <button
            onClick={handleClick}
        >
           Back
        </button>
    );
}

function RightArrow({ handleClick }) {
    return (
        <button
            onClick={handleClick}
        >
            Forward
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
    console.log(picHolder);

    for (let i = 0; i < picHolder.length; i++) {
        console.log('adding picture: ' + picHolder[i].src);
        pics.push(picHolder[i].src);
    }
    
    function inc() {
        setPn(pn + 1);
        if (pn >= pics.length) {
            setPn(0);
        }
        console.log('adding to pn, now ' + pn);
    }

    function dec() {
        setPn(pn - 1);
        if (pn < 0) {
            setPn(pics.length - 1);
        }
        console.log('subtracting from pn, now ' + pn);
    }


    return (
        <>
            <LeftArrow handleClick={dec} />
            <img alt="" src={pics[pn]} />
            <RightArrow handleClick={inc} />
            <Caption /> 
        </>
    );
}
