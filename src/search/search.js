import React, { Component } from 'react';

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
                <div>
                    <label htmlFor='hero'>Hero Name</label>
                    <input
                        id='hero'
                        name='heroName'
                        value={ this.state.heroName }
                        onChange={ this.handleNameInput }
                    />
                    <button>Search</button>
                </div>
                <div>
                    <button>
                        Random Hero
                </button>
                </div>
            </div>
        )

    }
}

export default Search;