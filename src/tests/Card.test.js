import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/card components/card/Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  const card = {
    "title": "Incredible Hulk Vol. 2 #92 'Exile, Part 1'",
    "publishDate": 2006,
    "writers": ["Greg Pak"],
    "pencillers": ["Carlo Pagualayan"],
    "inkers": ["Jeffrey Huet"],
    "letterers": ["Randy Gentile"],
    "colorists": ["Chris Sotomayor"],
    "editors": ["Mark Paniccia", "Nathan Cosby"],
    "characters": ["Hulk", "Mister Fantastic", "Doctor Strange", "Iron Man", "Black Bolt"],
    "adapted": true,
    "summary": "The Hulk lands on an alien planet known as Sakaar and winds up a gladiator alongside other creatures, such as Miek and Korg, fighting under the Red King.",
    "link": "https://marvel.fandom.com/wiki/Planet_Hulk",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/f/f3/Incredible_Hulk_Vol_2_92.jpg/revision/latest?cb=20090803141013",
    "id": 20,
    "favorite": false
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Card key={card.id} card={card} />
    )
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual( {toggleInfo: false} );
  });

  it('should match the snapshot with all the info passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle card info', () => {
    expect(wrapper.state()).toEqual( {toggleInfo: false} )
    wrapper.instance().showCardInfo();
    expect(wrapper.state()).toEqual( {toggleInfo: true} )
  })
})