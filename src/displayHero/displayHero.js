import React from 'react'
import HeroData from './heroData/heroData';
import style from './displayHero.module.css'


const DisplayHero = ( props ) => {

    const { name, powerstats, appearance, biography, images } = props.fetchedHero;

    if ( Object.entries( props.fetchedHero ).length !== 0) {

        return (
            <div>
                <span className={ style.heroNameFlex }>
                    <h1 className={ style.heroName }>{ name }</h1>
                </span>
                
                <div className={ style.background }>
                    <div className={ style.image }>
                        <img
                            src={ images.lg }
                            alt='spider-man miles morales'
                        />
                    </div>
                </div>

                <div className={ style.heroData }>
                    <div className={ style.heroStats }>
                        <HeroData stats={ powerstats } />
                    </div>
                    <HeroData stats={ appearance } />
                    <div
                        className={ style.heroBio }>
                        <HeroData stats={ biography } />
                    </div>

                </div>

            </div>
        )
    }
    else {
        return null
    };
}



export default DisplayHero;