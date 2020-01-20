import React, { Component } from 'react';
import style from './search.module.css';
import icon from '../icons/superhero.png'
import SearchIcon from '../icons/search.png'

class Search extends Component {
    state = {
        heroName: '',
        clicked: false
    }

    handleNameInput = ( event ) => {
        this.setState( {
            [ event.target.name ]: event.target.value
        } );
        console.log( this.state.heroName )
    }


    fetchHero = () => {
        this.props.searchHero( this.state.heroName )
    }

    searchClicked = () => {
        this.setState( { clicked: !this.state.clicked } );
    }
    render() {
        return (
            <div className={ style.searchContainer }>
                <div className={ style.searchHeroGrid }>

                    <div className={style.flex}>
                        <div className={ style.icon }>
                            <img src={ icon } alt='superhero' />
                        </div>

                        <button
                            onClick={ this.searchClicked }
                            className={ style.searchIconButton } >
                            <img src={ SearchIcon } />
                        </button>
                    </div>

                    <div>
                        { this.state.clicked
                            ? <div>
                                <input
                                    id='hero'
                                    name='heroName'
                                    placeholder="Spiderman"
                                    required
                                    value={ this.state.heroName }
                                    onChange={ this.handleNameInput }
                                    className={ style.searchInput }
                                />
                                <div>
                                    <button onClick={ this.fetchHero } className={ style.searchButton }> Search </button>
                                </div>
                                <div>
                                    <button onClick={ this.props.getRandomHero } className={ style.randomButton }>Random</button>
                                </div>
                            </div>

                            : null
                        }
                    </div>

                </div>

            </div>
        )

    }
}

export default Search;