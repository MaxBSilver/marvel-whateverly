import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import Header from './layout/Header';
import Card from './card components/Card';

class App extends Component {
  constructor(){
    super()
      this.state = {
        movies: [],
        comics: [],
        isLoading: true
      }
  }
  
  componentDidMount = () => {
     fetch('https://gist.githubusercontent.com/MaxBSilver/bc1994851ccc283835a07735b0034201/raw/ce0cae47d5efaddffe35141aa2fe0d02f894e17f/marvel-movies.json')
      .then(res => res.json())
      .then(movies => this.setState({movies}))

     fetch('https://gist.githubusercontent.com/MaxBSilver/945de3d62ec3e047cb29662d7eb0a6af/raw/28f2305090bbfe310ac906e07d00ae761f4e0107/marvel-comics.json')
      .then(res => res.json())
      .then(comics => {
        this.setState({comics})
        this.setState({isLoading: false});
      })
  }

  render() {
    return this.state.isLoading === true
    ? (<div></div>)
    : (
      <div className="App">
        <Header />
        {/* <Banner movies={this.state.movies} comics={this.state.comics}/> */}
        <Banner {...this.state}/>

      </div>
    );
  }
}

export default App;
