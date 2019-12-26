import React, { Component } from 'react';
import style from './search.module.css';
import icon from '../icons/superhero.png'

class Search extends Component {
    state = {
        id: 0,
        heroName: '',
        realName: ''
    }

    handleNameInput = ( event ) => {
        this.setState( {
            [ event.target.name ]: event.target.value
        } );
        console.log( this.state.heroName )
    }

    render() {
        return (
            <div>
                <div className={ style.searchHero }>
                    <div>  <img src={ icon } alt='superhero' style={ { height: '30px' } } /></div>
                    <div>
                        <input
                            id='hero'
                            name='heroName'
                            value={ this.state.heroName }
                            onChange={ this.handleNameInput }
                            placeholder="spiderman"
                        />
                    </div>
                    <div>
                        <button> Search </button>
                    </div>
                </div>
                <div>
                    <button>Random</button>
                </div>
            </div>
        )

    }
}

export default Search;