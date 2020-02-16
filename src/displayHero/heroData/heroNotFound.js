import React from 'react';
import NotFoundIcon from '../../icons/sad-1.png'
import style from './heroNotFound.module.css'

const heroNotFound = () => {
    return (
        <div className={style.container}>
            <h1>No Hero Found</h1>
            <p>Check your spelling. Heroes with the same name have Roman numbers after their name</p>
            <p>Exaple of heros, Anti-Venom, Batgirl II</p>
            <p>If no matching hero is found. Try the heros real full name</p>
            <img src={ NotFoundIcon } alt='sad face' className={style.notFoundFace}/>
        </div>
            )
        }
        
export default heroNotFound;