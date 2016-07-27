import StateSelect from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<StateSelect />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <StateSelect>{children}</StateSelect>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
