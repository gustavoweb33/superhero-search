import React, { Component } from 'react';
import Aliases from './aliases';
import style from './heroData.module.css'

class HeroData extends Component {
    render() {

        const heroDataProps = { ...this.props.stats }
        let aliases = [];
        
        //check if props has 'aliase' key in the object, otherwise we get an error. 
        if ( heroDataProps.aliases ) {
            //when it displays on the screen it will be one long line instead of seperate entries.
            //the new array corrects that issue. 
            aliases = [ ...heroDataProps.aliases ];
        }
        //delete it so it doesn't get displayed twice.
        delete heroDataProps.aliases;

        return (

            <div className={style.grid}>

                { Object.keys( heroDataProps ).map( ( characteristics ) => {
                    return <div key={ characteristics }  className={style.characteristics}>
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
