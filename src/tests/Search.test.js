import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search/Search';
import { shallow } from 'enzyme';

describe('Search', () => {

  const mockStoreRendered = jest.fn()

  const combined = [];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Search rendered={combined} storeRendered={mockStoreRendered} searchThisDataset={[{title: 'polly'}, {title: 'pocket'}]} />
    )
  });

  it('should have a basic default state', () => {
    expect(wrapper.state()).toEqual( {value: ''} )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should remove special characters', () => {
    let word = wrapper.instance().rmSpecChars('spider-man')
    expect(word).toEqual('spiderman');
  });

  it('should handle input values change', () => {
    expect(wrapper.state('value')).toEqual('')
    wrapper.instance().handleChange({target: {value: 'iron man'}})
    expect(wrapper.state('value')).toEqual('iron man');
  });

  it('should search data based on parameter input', () => {
    let word = wrapper.instance().finder('POLLY')
    expect(word).toEqual( [{title: 'polly'}] );
  });

  it('should accept an input value on submit', () => {
    expect(wrapper.state('value')).toEqual('')
    wrapper.instance().handleChange({target: {value: 'thor'}})
    expect(wrapper.state('value')).toEqual('thor')
    wrapper.instance().handleSubmit( {preventDefault: () => {} })
    expect(mockStoreRendered).toHaveBeenCalled();
  });
})