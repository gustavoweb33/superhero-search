import React from 'react'
import hero from './tempHeroData';
import HeroData from './heroData/heroData';
import style from './displayHero.module.css'


const DisplayHero = () => {
    const { powerstats, appearance, biography } = hero;

    return (
        <div>
            <div className={ style.image }>
                <img
                    src={ hero.images.lg }
                    alt='spider-man miles morales'
                />
            </div>
            {/*use this div as the grid box */ }
            <div className={ style.heroData }>
                <HeroData stats={ powerstats } />
                <HeroData stats={ appearance } />
                <div className={ style.heroBio }> <HeroData stats={ biography } /></div>

            </div>

        </div>
    )
}

export default DisplayHero;