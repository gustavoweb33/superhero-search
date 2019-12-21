import React from 'react'

import hero from './tempHeroData';

console.log( hero );

const Hero = () => {
    return (
        <div>
            <h1>Super Hero Search</h1>
            <div>
                <img
                    src={ hero.images.lg }
                    alt='spider-man miles morales'
                />
            </div>
            <div>
                <h2>{ hero.name }</h2>
            </div>

        </div>
    )
}

export default Hero;