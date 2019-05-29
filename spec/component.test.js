import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Reservation from '../client/src/components/Reservation';
import Calender from '../client/src/components/Reservation/Calendar';

describe('<Reservation />', () => {
  it('renders one <Foo /> components', () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper.find(Calender)).to.have.lengthOf(1);
  });
});
