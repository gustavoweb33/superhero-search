import React, { Component } from 'react';
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

        return (

            <div className={ style.border }>

                { Object.keys( heroDataProps ).map( ( key ) => {
                    return <div key={ key }>
                        <span
                            style={ { fontWeight: 'bold', textTransform: 'uppercase' } }>
                            { key }
                        </span>
                        :
                        <span>
                            { heroDataProps[ key ] }
                        </span>
                    </div>

                } ) }

                <span>ALIASES</span>
                { aliases.map( ( aliase ) => {
                    return <div key={ aliase }>
                        { aliase }
                    </div>
                } ) }
            </div>

        )
    }
}

export default HeroData;
