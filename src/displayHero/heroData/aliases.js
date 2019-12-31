import React from 'react';

const aliases = ( aliases ) => {
    const { codeNames } = aliases;
    let heroNames;

    if ( codeNames.length === 0 ) {
        heroNames = null;
    }
    else {
        //create a button that will load more name
        let partialCodeName = codeNames.splice(0, 5)
        heroNames = (
            <div style={ { display: 'flex', flexWrap: 'wrap' } }>
                { partialCodeName.map( ( name ) => {
                    return <ul key={ name } style={ { margin: '0px 20px' } }>
                        <li>{ name }</li>
                    </ul>
                } ) }
            </div>
        )
    }
    return heroNames;
}

export default aliases;