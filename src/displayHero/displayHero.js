import React from 'react'
import HeroData from './heroData/heroData';
import style from './displayHero.module.css'
import HeroNotFound from './heroData/heroNotFound';


const DisplayHero = ( props ) => {
    //'Hero not found' is the value set in the state when it fails to find a matching hero.
    if ( props.fetchedHero === 'Hero not found' ) {
        return <HeroNotFound />
    }

    //Check to ensure we retrived hero data.
    if ( Object.values( props.fetchedHero !== 0 ) ) {
        const { name, powerstats, appearance, biography, images } = props.fetchedHero;

        return (
            <div>
                <span className={ style.heroNameFlex }>
                    <h1 className={ style.heroName }>{ name }</h1>
                </span>

                <div className={ style.background }>
                    <div className={ style.image }>
                        <img
                            src={ images.md }
                            alt={ `${ name }` }
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
        return null;
    };
}



export default DisplayHero;