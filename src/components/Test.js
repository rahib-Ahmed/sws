import React from 'react';
import './Test.css';
import anime from 'animejs/lib/anime.es.js';

var animation = anime({
    targets: '.segment',
    width: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
})

function Test() {

console.log('here')
    return (
    <div>
        <div className="segment"></div>
    </div>
    )
}

export default Test;