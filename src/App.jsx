import React, { Component } from 'react';
import Banner from './components/banner/Banner';
import Header from './layout/Header';
import CardContainer from './components/card components/cardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      comics: [],
      combined: [],
      rendered: [],
      favorites: JSON.parse(localStorage.getItem('marvelous')) || []
    };
  }
  
  componentDidMount = () => {
    // window.addEventListener("scroll", this.resizeHeaderOnScroll);
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/raechelo/marvelMovies')
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies.marvelMovies }))
      .catch(err => { throw new Error(err) })

    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/raechelo/marvelComics')
      .then(res => res.json())
      .then(comics => this.setState({ comics: comics.marvelComics }))
      .then(() => {
        this.combineData()
        let combinedCopy = this.state.combined;
        this.setState({rendered: combinedCopy.sort(() => .5 - Math.random()).slice(0, 10)})
      })
      .catch(err => { throw new Error(err) })
  }

  updateFavorites = () => {
    this.setState( {favorites: JSON.parse(localStorage.getItem('marvelous')) })
  }

  resizeHeaderOnScroll() {
    // const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    //   shrinkOn = 200,
    //   headerEl = document.getElementById("banner");

    // if (distanceY > shrinkOn) {
    //   console.log('should be small')
    //   // headerEl.classList.add("smaller");
    // } else {
    //   // headerEl.classList.remove("smaller");
    //   console.log('should be normal')
    // }
  }

  combineData = () => {
    this.setState({ combined: Object.values(this.state.movies).concat(Object.values(this.state.comics)) })
  }

  storeRendered = (media) => {
    this.setState({rendered : media})
  }

  render() {
    return (
      <div className="App">
        <Banner id="banner" />
        <Header {...this.state} storeRendered={this.storeRendered}/>
        <h2>Comics & Movies</h2>
        < CardContainer 
          updateFavorites={ this.updateFavorites } 
          rendered={ this.state.rendered } />
        <h2>Your Favorites</h2>
        < CardContainer 
          rendered={ this.state.favorites }
          updateFavorites={ this.updateFavorites }
          favorites={ true } />
        {/* <Banner movies={this.state.movies} comics={this.state.comics}/> */}
        {/* <Banner {...this.state}/> */}
      </div>
    );
  }
}

export default App;
