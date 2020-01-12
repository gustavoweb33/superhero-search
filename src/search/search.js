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
            <div className={style.searchContainer}>
                <div className={ style.searchHeroGrid }>
                    <div className={ style.icon }>
                        <img src={ icon } alt='superhero' />
                    </div>
                    <div >
                        <input
                            id='hero'
                            name='heroName'
                            placeholder="Spiderman"
                            required
                            value={ this.state.heroName }
                            onChange={ this.handleNameInput }
                            className={ style.searchInput }
                        />
                    </div>
                    <div>
                        <button onClick={ this.fetchHero }> Search </button>
                    </div>
                    <div>
                        <button onClick={ this.props.getRandomHero }>Random</button>
                    </div>
                </div>

            </div>
        )

    }
}

export default Search;