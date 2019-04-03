import React, { Component } from 'react';
import Search from '../components/Search';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <header>
        <Search data ={this.props.combined} storeRendered={this.props.storeRendered}/>
      </header>
    )
  }
}
