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
  }

  handleMovies = e => {
    e.preventDefault();
    e.target.id === 'movies'
      ? this.setState({movies: !this.state.movies})
      : this.setState({comics: false})
    if (this.state.comics) this.setState({comics: false});
    this.props.storeRendered(...[Object.values(this.props.movies)])
  }

  
  render() {
    let mov = this.props.movies['deadpool']
    let com = this.props.comics['civilWar']
              
    switch(true) {
      case this.state.movies:
      return (
            <div>
            <select>
              <option value="" selected="selected">--Filter by--</option>
            {Object.keys(mov).map(m => (<option value={m}>{m}</option>))}
            </select>
            </div>
            )
      case this.state.comics:
      return (
        <div>
        <select>
          <option value="" selected="selected">--Filter by--</option>
          {Object.keys(com).map(c => (<option value={c}>{c}</option>))}
        </select>
        </div>
        )
      default:
      // return false
    
      return (
      <form >
        <input onClick={this.handleComics} type="submit" value="Comics" id="comics"/>
        <input onClick={this.handleMovies} type="submit" value="Movies" id="movies"/>
      </form>
      )
    }
  }
}

export default Filter
