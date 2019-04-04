import React, { Component } from 'react'

export class Filter extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  
  render() {
    return (
      <form>
        <button>Comics</button>
        <button>Movies</button>
      </form>
    )
  }
}

export default Filter
