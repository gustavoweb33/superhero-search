import React, { Component } from 'react';
import Search from './search/search'
import DisplayHero from './displayHero/displayHero';
import NoHeroFound from './displayHero/heroData/heroNotFound';



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
      .then( data => {
        if ( data.id ) {
          this.setState( { hero: data } )
        }
        else {
          this.setState( { hero: 'Hero not found' } )
        }

      } )
      .catch( error => console.log( error ) )
  }

  render() {
    return (
      <div>
        <Search getRandomHero={ this.getRandomHero } searchHero={ this.getSearchedHero } />
        { Object.values( this.state.hero ).length
          ? <DisplayHero fetchedHero={ this.state.hero } />
          : <h1>...Loading</h1>
        }
      </div>
    )

  }

}

export default App;
