import React, { Component } from 'react';
import Search from './search/search'
import DisplayHero from './displayHero/displayHero';
import IconsCredit from './iconCredit/iconCredit';
import style from './app.module.css'



class App extends Component {

  state = {
    hero: {},
    heroNameLength: 0
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

  getSearchedHero = ( heroName ) => {
    //heros must have name longer than 3 char
    if ( heroName.length <= 3 ) {
      this.setState( { heroNameLength: heroName.length } )
      return false;
    }
    else {

      fetch( `http://localhost:3001/search?hero=${ heroName }` )
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
  }

  render() {
    return (
      <div className={ style.container }>
        <div className={ style.app }> {/* might be redundent*/ }
          <Search getRandomHero={ this.getRandomHero } getSearchedHero={ this.getSearchedHero } />
          <p>Make sure name is longer than three characters.</p>
          { Object.values( this.state.hero ).length
            ? <DisplayHero fetchedHero={ this.state.hero } />
            : <h1>...Loading</h1>
          }
          <IconsCredit />
        </div>
      </div>
    )

  }

}

export default App;
