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

  //it takes a few seconds to change the image
 getRandomHero = () => {
    fetch( 'http://localhost:3001/' )
      .then( ( response ) => response.json() )
      .then( ( data ) => this.setState( { hero: data } ) )
      .catch( ( error ) => console.log( error ) )
  }

  render() {

    return (
      <div className="App">
        <Search getRandomHero={ this.getRandomHero } />
        { this.state.hero ? <DisplayHero fetchedHero={ this.state.hero } /> : null }
      </div>
    )

  }

}

export default App;
