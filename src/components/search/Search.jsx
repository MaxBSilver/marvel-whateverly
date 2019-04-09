import React, { Component } from 'react'
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
    if (e.target.value === '') {
      this.props.storeRendered(this.props.data.slice(0, 10));
    }
  }

  rmSpecChars(word) {
    return word.split('').filter((ltr) => {
      return !["'", " ", "-", ",", ":", "#", ".", "!", "?"].includes(ltr)
    }).join('')
  }

  searchData() {
    let data;
    switch (true) {
    case this.props.searchThisDataset === 'movies':
      data = Object.values(this.props.movies)
      break;
    case this.props.searchThisDataset === 'comics':
      data = Object.values(this.props.comics)
      break;
    default:
      data = this.props.data
    }
    return data;
  }

  finder(words, criteria) {
    return this.searchData().filter((item) => { 
      let reduced = item[criteria].toUpperCase().split(' ').reduce((acc, word) => {
          acc.push(this.rmSpecChars(word))
        return acc;
      }, [])
      return reduced.some(keyWord => words.includes(keyWord));
   })
  }

  handleSubmit = e => {
    e.preventDefault()
    let userInput = this.state.value.split(' ').length > 1 
      ? this.state.value.toUpperCase().split(' ').map(word => this.rmSpecChars(word))
      : [this.rmSpecChars(this.state.value.toUpperCase())]
    let result = this.finder(userInput, this.props.searchCriteria);
    this.props.storeRendered(result)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className="search-input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={`Search ${this.props.searchThisDataset}`}
        />
        <input
          type='submit'
          className="search-btn"
          value='Search'
        />
      </form>
    )
  }
}

export default Search
