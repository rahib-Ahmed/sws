import React, { useEffect } from 'react';
import '../App.css';
import anime from 'animejs/lib/anime.es.js';

function Storage(props){
    const empty = 100 - props.empty;
    const x = `${empty*0.95}%`.toString();
    console.log("filled storage"+x)
    useEffect(() => {
        const animation = anime({
            targets: '.progressBar',
            height: x,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false,
        })
    })
    return (
        <div className="cnn2">
            <div className="seg"></div>
            <div className="progressBar"></div>
            <div className="progressText">{empty}%</div>
         </div>
        )
    }

export default Storage;