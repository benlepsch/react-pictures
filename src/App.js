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
    const picHolder = document.getElementById('pic-holder').childNodes;

    for (let i = 0; i < picHolder.length; i++) {
        pics.push(picHolder[i].src);
    }
    
    function inc() {
        setPn(pn + 1);
        if (pn >= pics.length) {
            setPn(0);
        }
    }

    function dec() {
        setPn(pn - 1);
        if (pn < 0) {
            setPn(pics.length - 1);
        }
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
