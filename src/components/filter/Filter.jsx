import React, { Component } from 'react'

export class Filter extends Component {
  constructor() {
    super();
    this.state = {
      movies: false,
      comics: false,
      favorites: false
    }
  }

  handleComics = e => {
    e.preventDefault();
    e.target.id === 'comics'
    ? this.setState({comics: !this.state.comics})
    : this.setState({movies: false})
    if (this.state.movies) this.setState({movies: false});
    this.props.storeRendered(Object.values(this.props.comics))
    this.props.setSearchDataset(Object.values(this.props.comics))
  }

  handleMovies = e => {
    e.preventDefault();
    e.target.id === 'movies'
    ? this.setState({movies: !this.state.movies})
    : this.setState({comics: false})
    if (this.state.comics) this.setState({comics: false});
    this.props.storeRendered(Object.values(this.props.movies))
    this.props.setSearchDataset(Object.values(this.props.movies))
  }

  handleFavorites = e => {
    e.preventDefault();
    this.state.favorites
    ? this.props.storeRendered(this.props.data.slice(0, 10))
    : this.props.storeRendered(JSON.parse(localStorage.getItem('marvelous')));
    this.setState({favorites: !this.state.favorites});
  }

  resetSearch = () => {
    this.props.setSearchDataset(this.props.data);
    this.props.storeRendered(this.props.data);
    this.setState({comics: false, movies: false})
  }

  sortCards = e => {
    let sortThis = this.state.movies 
      ? Object.values(this.props.movies) 
      : Object.values(this.props.comics)
    this.props.storeRendered(sortThis
      .sort((el1, el2) => {
        if (el1[e.target.value] !== null && el2[e.target.value] !== null && typeof el1[e.target.value] === 'object') {
          return el2[e.target.value][0].localeCompare(el1[e.target.value][0])
        } else return el2[e.target.value] - el1[e.target.value] 
      })
    )
  }
  
  render() {
    let mov = Object.values([this.props.movies][0])[0]
    let com = Object.values([this.props.comics][0])[0]
    let excludedFilters = ['title', 'link', 'img', 'id', 'favorite', 'summary']
    switch(true) {
      case this.state.movies:
      return (
        <div className="filter-form">
          <button className="filter-btn" onClick={this.resetSearch} type="button">
            Show All
          </button>
          <input className="filter-btn" onClick={this.handleComics} type="submit" value="Show Comics" id="comics"/>
          <select onChange={this.sortCards} className="filter-dropdown">
            <option value="" selected="selected">--Sort by--</option>
          {Object.keys(mov).map(m => excludedFilters.includes(m) ? true : (<option value={m}>{m}</option>))}
          </select>
        </div>
      )
      case this.state.comics:
      return (
        <div className="filter-form">
          <button className="filter-btn" onClick={this.resetSearch} type="button">
              Show All
          </button>
          <input className="filter-btn" onClick={this.handleMovies} type="submit" value="Show Movies" id="movies"/>
          <select onChange={this.sortCards} className="filter-dropdown">
            <option value="" selected="selected">--Sort by--</option>
            {Object.keys(com).map(c => excludedFilters.includes(c) ? true : (<option value={c}>{c}</option>))}
          </select>
        </div>
      )
      default:
      return (
      <form className="default-form">
        <input className="filter-btn" onClick={this.handleFavorites} type="submit" 
        value={this.state.favorites ? "Show Random": "Show Favorites"} id="comics"/>
        <input className="filter-btn" onClick={this.handleComics} type="submit" value="Comics" id="comics"/>
        <input className="filter-btn" onClick={this.handleMovies} type="submit" value="Movies" id="movies"/>
      </form>
      )
    }
  }
}

export default Filter
