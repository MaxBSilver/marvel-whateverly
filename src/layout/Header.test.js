import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Header />
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {value: ''} )
  });

  it('should pass the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})