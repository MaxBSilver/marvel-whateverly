import React from 'react';
import Banner from '../components/banner/Banner';
import { shallow } from 'enzyme';

describe('Banner', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Banner />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

})