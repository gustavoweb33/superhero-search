import React, { Component } from 'react';
import style from './heroData.module.css'

class HeroData extends Component {
    render() {
        const heroDataProps = { ...this.props.stats }
        return (
          
                <div className={ style.border }>

                    { Object.keys( heroDataProps ).map( ( key ) => {

                        return <div key={ key }>
                            <span
                                style={ { fontWeight: 'bold', textTransform: 'uppercase' } }>
                                { key }
                            </span>
                            : { heroDataProps[ key ] }
                        </div>

                    } ) }

                </div>
           
        )
    }
}

export default HeroData;
