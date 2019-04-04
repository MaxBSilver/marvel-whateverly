import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <App />
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {movies: [], comics: [], combined: [], rendered: []} )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
