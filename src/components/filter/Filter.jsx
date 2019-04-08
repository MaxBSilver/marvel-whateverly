import React, { Component } from 'react'

export class Filter extends Component {
  constructor() {
    super();
    this.state = {
      movies: false,
      comics: false
    }
  }

  handleComics = e => {
    e.preventDefault();
    e.target.id === 'comics'
    ? this.setState({comics: !this.state.comics})
    : this.setState({movies: false})
    if (this.state.movies) this.setState({movies: false});
    this.props.storeRendered(...[Object.values(this.props.comics)])
    this.props.setSearchDataset('comics')
  }

  handleMovies = e => {
    e.preventDefault();
    e.target.id === 'movies'
    ? this.setState({movies: !this.state.movies})
    : this.setState({comics: false})
    if (this.state.comics) this.setState({comics: false});
    this.props.storeRendered(...[Object.values(this.props.movies)])
    this.props.setSearchDataset('movies')
  }

  resetSearch = () => {
    this.props.setSearchDataset('');
    this.props.storeRendered(this.props.data);
    this.setState({comics: false, movies: false})
  }
  
  render() {
    let mov = [this.props.movies][0]
    let com = [this.props.comics][0]
              
    switch(true) {
      case this.state.movies:
      return (
        <div>
          <button onClick={this.resetSearch} type="button">
            Show All
          </button>
          <input onClick={this.handleComics} type="submit" value="Show Comics" id="comics"/>
          <select>
            <option value="" selected="selected">--Filter by--</option>
          {Object.keys(mov).map(m => (<option value={m}>{m}</option>))}
          </select>
        </div>
      )
      case this.state.comics:
      return (
        <div>
          <button onClick={this.resetSearch} type="button">
              Show All
          </button>
          <input onClick={this.handleMovies} type="submit" value="Show Movies" id="movies"/>
          <select>
            <option value="" selected="selected">--Filter by--</option>
            {Object.keys(com).map(c => (<option value={c}>{c}</option>))}
          </select>
        </div>
      )
      default:
      return (
      <form >
        <input className="filter-btn" onClick={this.handleComics} type="submit" value="Comics" id="comics"/>
        <input className="filter-btn" onClick={this.handleMovies} type="submit" value="Movies" id="movies"/>
      </form>
      )
    }
  }
}

export default Filter
