import React from 'react';
import style from './aliases.module.css';

const aliases = ( aliases ) => {
    const { codeNames } = aliases;
    let heroNames;

    if ( codeNames.length === 0 ) {
        heroNames = null;
    }
    else {
        //Limit the ammount rendered so it doesn't diplay too many names. 
        let partialCodeName = codeNames.splice( 0, 5 );
        heroNames = (
            <div className={style.container}>

                <span className={ style.heroInfoTitles }>Aliases: </span>

                { partialCodeName.map( ( name ) => {
                    return <ul key={ name } className={style.aliases}>
                        <li>{ name }</li>
                    </ul>
                } ) }
            </div>
        )
    }
    return heroNames;
}

export default aliases;