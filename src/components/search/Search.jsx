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
  }

  rmSpecChars(word) {
    return word.split('').filter((ltr) => {
      return !["'", " ", "-", ",", ":", "#", ".", "!", "?"].includes(ltr)
    }).join('')
  }

  finder(words) {
    return this.props.data.filter((item) => { 
      let reduced = item.title.toUpperCase().split(' ').reduce((acc, word) => {
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
    let result = this.finder(userInput);
    this.props.storeRendered(result)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Search'
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}

export default Search
