import React, { useEffect } from 'react';
import '../App.css';
import anime from 'animejs/lib/anime.es.js';

function Storage(){
    useEffect(() => {

        const animation = anime({
            targets: '.seg',
            width: '90%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false
        })
    })
    return (
        <div className="cnn2">
            <div className="seg"></div>
        </div>
        )
    }

export default Storage;