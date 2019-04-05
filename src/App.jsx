import React, { Component } from 'react';
import Banner from './components/Banner';
import Header from './layout/Header';
import CardContainer from './card components/CardContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      comics: [],
      combined: [],
      rendered: []
    };
  }
  
  componentDidMount = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/raechelo/marvelMovies')
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies.marvelMovies }))
      .catch(err => { throw new Error(err) })

    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/raechelo/marvelComics')
      .then(res => res.json())
      .then(comics => this.setState({ comics: comics.marvelComics }))
      .then(() => {
        this.combineData()
      })
      .catch(err => { throw new Error(err) })
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
        <Banner />
        <Header {...this.state} storeRendered={this.storeRendered}/>
        < CardContainer rendered={ this.state.rendered } />
        {/* <Banner movies={this.state.movies} comics={this.state.comics}/> */}
        {/* <Banner {...this.state}/> */}
        {/* <CardContainer rendered={this.state.rendered}/> */}
      </div>
    );
  }
}

export default App;
