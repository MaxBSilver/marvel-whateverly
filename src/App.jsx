import React, { Component } from 'react';
import Banner from './components/Banner';
import Header from './layout/Header';
import CardContainer from './card components/CardContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: null,
      comics: null,
      combined: null,
      rendered: [],
    };
  }
  
  componentDidMount = () => {
     fetch('https://gist.githubusercontent.com/MaxBSilver/bc1994851ccc283835a07735b0034201/raw/ce0cae47d5efaddffe35141aa2fe0d02f894e17f/marvel-movies.json')
      .then(res => res.json())
      .then(movies => this.setState({ movies }))

     fetch('https://gist.githubusercontent.com/MaxBSilver/945de3d62ec3e047cb29662d7eb0a6af/raw/28f2305090bbfe310ac906e07d00ae761f4e0107/marvel-comics.json')
      .then(res => res.json())
      .then(comics => this.setState({ comics }))
      .then(() => this.setState({ combined: Object.values(this.state.movies.movies).concat(Object.values(this.state.comics.comics)) }))
  }

  render() {
    if (!this.state.movies || !this.state.comics){
      return <div/>
    }
    return (
      <div className="App">
        <Banner />
        <Header {...this.state} />
        {/* <Banner movies={this.state.movies} comics={this.state.comics}/> */}
        {/* <Banner {...this.state}/> */}
        {/* <CardContainer movies={this.state.movies} comics={this.state.comics}/> */}
      </div>
    );
  }
}

export default App;
