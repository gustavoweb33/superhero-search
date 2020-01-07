import React, { Component } from 'react';
import Search from './search/search'
import DisplayHero from './displayHero/displayHero';



class App extends Component {

  state = {
    hero: {}
  }

  async componentDidMount() {
    fetch( 'http://localhost:3001/' )
      .then( ( response ) => response.json() )
      .then( ( data ) => this.setState( { hero: data } ) )
      .catch( ( error ) => console.log( error ) )
  }

  //it takes a few seconds to update the image
  getRandomHero = () => {
    fetch( 'http://localhost:3001/' )
      .then( response => response.json() )
      .then( data => {
        if ( this.state.hero.id !== data.id ) {
          this.setState( { hero: data } )
        }
      } )
      .catch( error => console.log( error ) )
  }

  getSearchedHero = ( hero ) => {
    console.log( hero )
    fetch( `http://localhost:3001/search?hero=${ hero.heroName }` )
      .then( response => response.json() )
      .then( data => console.log( data ) )
      .catch( error => console.log( error ) )
  }

  render() {
    return (
      <div>
        <Search getRandomHero={ this.getRandomHero } searchHero={ this.getSearchedHero } />
        <DisplayHero fetchedHero={ this.state.hero } />
      </div>
    )

  }

}

export default App;
