import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './layout/Header'

class App extends Component {
  constructor(){
    super()
      this.state = []
  }
  componentDidMount() {
    //todo: fetch the api here
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner props={this.props}/>
      </div>
    );
  }
}

export default App;
