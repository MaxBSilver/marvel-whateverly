import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {

  let mockSearchDataset = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Header />
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {value: '', searchThisDataset: null} )
  });

  it('should pass the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})