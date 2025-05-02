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

const PICTURE_DATA = [
    { 
        src: "images/IMG_7079.jpg",
        alt: "Gorham mountain, the Beehive, sand beach, & Great Head. Acadia NP, ME",
    },
    {
        src: "images/IMG_7115.jpg",
        alt: "The Atlantic Ocean from the top of the South Wall at sunset. Acadia NP, ME",
    },
    {
        src: "images/gallery.jpg",
        alt: "Seconds away from injuring my pinky finger while trying the Gallery 5.12a. Acadia NP, ME",
    },
    {
        src: "images/IMG_6479.jpg",
        alt: "Nearing the summit of Mt Marcy the day before the 2024 eclipse. Adirondacks, NY",
    },
    {
        src: "images/gunks.jpg",
        alt: "Walking along the top of the Peterskill area at the Gunks. Shawangunk Mountains, NY",
    },
    {
        src: "images/IMG_5297.jpg",
        alt: "Waking up to a foggy morning in Dolly Sods, WV",
    },
    {
        src: "images/seneca.jpg",
        alt: "Seneca rocks, WV",
    },
    {
        src: "images/IMG_6276.jpg",
        alt: "Skiing at the Purgatory resort near Durango, CO",
    },
    {
        src: "images/20250312_173125.jpg",
        alt: "Tom and I on top of Castleton Tower. Castle Valley, UT",
    },
    {
        src: "images/IMG_6985.jpg",
        alt: "Maya hitting the fent slump on top of Castleton Tower with the La Sal mountains in the background. Castle Valley, UT",
    },
    {
        src: "images/20250312_191544.jpg",
        alt: "Hiking down from Castleton Tower as the moon rises. Castle Valley, UT",
    },
    {
        src: "images/image.jpg",
        alt: "Oh My God Dihedral & the view towards Etlan from the top of Strawberry Fields. Old Rag, VA",
    },
    {
        src: "images/thunderstruck.jpg",
        alt: "2 falls into Thunderstruck 5.12b and about to take my third. New River Gorge, WV",
    },
    {
        src: "images/IMG_6272.jpg",
        alt: "Taking a break on the Falcon Flow trail outside Moab, UT",
    },
    {
        src: "images/IMG_6177.jpg",
        alt: "View from inside the Looking Glass arch outside Moab, UT",
    },
];


export default Frame;
