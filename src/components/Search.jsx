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

  handleSubmit = e => {
    e.preventDefault()
    const specChars = ["'", " ", "-", ",", ":", "#", ".", "!", "?"]
    let userInput = this.state.value.toUpperCase().split('').filter((ltr) => {
      return !specChars.includes(ltr)
    }).join('')
    console.log(userInput)
    let a = this.props.data.filter((item) => {
      return userInput.match(item.title.toUpperCase().split('').filter((ltr) => {
        return !specChars.includes(ltr)
      }).join('')) ?
      item : false
    })
    this.props.storeRendered(a);
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
