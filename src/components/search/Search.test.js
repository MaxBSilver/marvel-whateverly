import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {

  const mockStoreRendered = jest.fn()

  const combined = [];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Search rendered={combined} storeRendered={mockStoreRendered} />
    )
  });

  it('should have a basic default state', () => {
    expect(wrapper.state()).toEqual( {value: ''} )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sould remove special characters', () => {
    expect(wrapper)
  })
})