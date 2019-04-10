import React from 'react';
import Search from '../components/search/Search';
import { shallow } from 'enzyme';

describe('Search', () => {

  const mockStoreRendered = jest.fn()
  const mockCard = {
    "title": "Captain Marvel",
    "releaseYear": 2019,
    "directors": ["Anna Boden", "Ryan Fleck"],
    "rating": "PG13",
    "stars": ["Brie Larson", "Samuel L. Jackson","Ben Mendelsohn", "Lee Pace", "Clark Gregg"],
    "imdbRating": 7.2,
    "characters": ["Captain Marvel", "Nick Fury", "Talos", "Korath", "Phil Coulson", "Ronan"],
    "basedOn": ["Captain Marvel Vol. 7 #1"],
    "link": "https://www.imdb.com/title/tt4154664/?ref_=nv_sr_1",
    "img": "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg",
    "id": 8,
    "favorite": false
  };
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
    wrapper.instance().handleChange( {target: {value: 'iron man'}} )
    expect(wrapper.state('value')).toEqual('iron man');
  });

  it('should search data based on parameter input', () => {
    let word = wrapper.instance().finder('POLLY')
    expect(word).toEqual( [{title: 'polly'}] );
  });

  it('should accept an input value on submit', () => {
    expect(wrapper.state('value')).toEqual('')
    wrapper.instance().handleChange( {target: {value: 'thor'}} )
    expect(wrapper.state('value')).toEqual('thor')
    wrapper.instance().handleSubmit( {preventDefault: () => {} })
    expect(mockStoreRendered).toHaveBeenCalled();
  });

  it('should increase search capability', () => {
    let result = wrapper.instance().increaseSearchCapability(mockCard)
    expect(result).toEqual([
      "ANNA", "BODEN", "RYAN", "FLECK", "BRIE", "LARSON", "SAMUEL", "L.", "JACKSON", "BEN", "MENDELSOHN", "LEE", "PACE", "CLARK", "GREGG", "CAPTAIN", "MARVEL", "NICK", "FURY", "TALOS", "KORATH", "PHIL", "COULSON", "RONAN",
    ]);
  })
})