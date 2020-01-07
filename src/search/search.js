import React, { Component } from 'react';
import style from './search.module.css';
import icon from '../icons/superhero.png'

class Search extends Component {
    state = {
        heroName: ''
    }

    handleNameInput = ( event ) => {
        this.setState( {
            [ event.target.name ]: event.target.value
        } );
        console.log( this.state.heroName )
    }


    fetchHero = () => {
        this.props.searchHero( this.state )
    }


    render() {
        return (
            <div>
                <div className={ style.searchHero }>
                    <div className={ style.icon }>
                        <img src={ icon } alt='superhero' />
                    </div>
                    <div >
                        <input
                            id='hero'
                            name='heroName'
                            value={ this.state.heroName }
                            onChange={ this.handleNameInput }
                            placeholder="Spiderman"
                            className={ style.searchInput }
                        />
                    </div>
                    <div>
                        <button onClick={ this.fetchHero }> Search </button>
                    </div>
                </div>
                <div>
                    <button onClick={ this.props.getRandomHero }>Random</button>
                </div>
            </div>
        )

    }
}

export default Search;