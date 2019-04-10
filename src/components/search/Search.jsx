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

  increaseSearchCapability(card) {
    let container = [];
    const splitter = (person) => person.toUpperCase().split(' ');
    if (card.directors) {
      card.directors.forEach(person => container.push(...splitter(person)))
      card.stars.forEach(person => container.push(...splitter(person)))
      card.characters.forEach(person => container.push(...splitter(person)))
    } else if (card.publishDate) {
      card.writers.forEach(person => container.push(...splitter(person)))
      card.characters.forEach(person => container.push(...splitter(person)))
      if (card.editors) {
        card.editors.forEach(person => container.push(...splitter(person)))
      }
    }
    return container;
  }

  finder(words) {
    let searchHere = this.props.searchThisDataset || this.props.data
    return searchHere.filter((item) => { 
      let reduced = item.title.toUpperCase().split(' ').reduce((acc, word) => {
          acc.push(this.rmSpecChars(word))
        return acc;
      }, [])
      let additionalSearch = this.increaseSearchCapability(item)
      return reduced.concat(additionalSearch).some(keyWord => words.includes(keyWord));
   })
  }

  handleSubmit = e => {
    e.preventDefault()
    let userInput = this.state.value.split(' ').length > 1 
      ? this.state.value.toUpperCase().split(' ').map(word => this.rmSpecChars(word))
      : [this.rmSpecChars(this.state.value.toUpperCase())]
    let result = this.finder(userInput);
    if (this.state.value !== '') this.props.storeRendered(result);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className="search-input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Search'
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
