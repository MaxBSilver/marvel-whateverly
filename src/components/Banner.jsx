import React, { Component } from 'react'


export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    return (
      <section className="banner-title">
        <h1>MARVELOUSLY</h1>
      </section>
    )
  }
}

export default Banner
