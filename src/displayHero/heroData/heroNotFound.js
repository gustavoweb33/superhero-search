import React from 'react';
import NotFoundIcon from '../../icons/sad-1.png'
import style from './heroNotFound.module.css'

const heroNotFound = () => {
    return (
        <div className={ style.container }>
            <h1>No Hero Found</h1>
            <p>Check your spelling. Some heroes might have a dash or Roman number in their name.</p>
            <p>Example: Anti-Venom, Batgirl II.</p>
            <p>If no matching hero is found. Try the hero's real full name.</p>
            <img src={ NotFoundIcon } alt='sad face' className={ style.notFoundFace } />
        </div>
    )
}

export default heroNotFound;