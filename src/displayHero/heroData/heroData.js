import React, { Component } from 'react';
import Aliases from './aliases';
import style from './heroData.module.css'

class HeroData extends Component {
    render() {

        const heroDataProps = { ...this.props.stats }
        let aliases = [];
        //check if props is the 'aliase' key in the object
        if ( heroDataProps.aliases ) {
            /*make a separate array otherwise when it prints on the screen, it will be one long line instead of seperate entries */
            aliases = [ ...heroDataProps.aliases ];
        }
        delete heroDataProps.aliases;

        return (

            <div>

                { Object.keys( heroDataProps ).map( ( characteristics ) => {
                    return <div key={ characteristics }>
                        <span
                            className={ style.heroInfoTitles }>
                            { characteristics }:
                        </span>

                        <span className={ style.heroInfo }>
                            { heroDataProps[ characteristics ] }
                        </span>
                    </div>

                } ) }
                <Aliases codeNames={ aliases } />
            </div>

        )
    }
}

export default HeroData;
