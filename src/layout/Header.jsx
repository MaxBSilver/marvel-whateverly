import React, { Component } from 'react';
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      searchThisDataset: null
    }
  }

  setSearchDataset = (dataset) => {
    this.setState({searchThisDataset: dataset})
  }

  render() {
    return (
      <header className='Header'>
        <Search 
          data={this.props.combined} 
          movies={this.props.movies}
          comics={this.props.comics}
          storeRendered={this.props.storeRendered}
          searchThisDataset={this.state.searchThisDataset}
        />
        <Filter 
          data={this.props.combined}
          storeRendered={this.props.storeRendered}
          comics={this.props.comics} 
          movies={this.props.movies}
          setSearchDataset={this.setSearchDataset}
          {...this.state}
          setSearchDataset={this.setSearchDataset}
        />
      </header>
    )
  }
}
