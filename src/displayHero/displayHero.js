import React from 'react'
import hero from './tempHeroData';
import HeroData from './heroData/heroData';


const DisplayHero = () => {
    const { powerstats, appearance, biography } = hero;

    return (
        <div>
            <div>
                <img
                    src={ hero.images.lg }
                    alt='spider-man miles morales'
                />
            </div>
            {/*use this div as the grid box */}
            <div>
                <HeroData stats={ powerstats } />
                <HeroData stats={ appearance } />
                <HeroData stats={ biography } />
            </div>

        </div>
    )
}

export default DisplayHero;