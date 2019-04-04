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
    this.props.rendered.push(...[this.props.comics])
  }

  handleMovies = e => {
    e.preventDefault();
    e.target.id === 'movies'
      ? this.setState({movies: !this.state.movies})
      : this.setState({comics: false})
    if (this.state.comics) this.setState({comics: false});
    this.props.rendered.push(...[this.props.movies])
  }
  
  render() {
    return (
      <form >
        <input onClick={this.handleComics} type="submit" value="Comics" id="comics"/>
        <input onClick={this.handleMovies} type="submit" value="Movies" id="movies"/>
      </form>
    )
  }
}

export default Filter
