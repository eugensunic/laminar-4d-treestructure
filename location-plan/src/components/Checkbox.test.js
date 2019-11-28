import React from 'react';
import { mount } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('should render view', () => {
    const wrapper = mount(<Checkbox />);
    expect(wrapper.html()).toBeTruthy();
  });

  it('should contain properties', () => {
    const wrapper = mount(<Checkbox id="1" value="value1" />);
    const html = wrapper.html();
    // input
    expect(html).toContain(
      `<input class="form-check-input" type="checkbox" id="gridCheck1">`
    );
    // label
    expect(html).toContain(
      `<label class="form-check-label" for="gridCheck1">value1</label>`
    );
  });
});
