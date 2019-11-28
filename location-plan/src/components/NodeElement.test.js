import NodeElement from '../components/NodeElement';
import React from 'react';
import { mount, render, shallow } from 'enzyme';

describe('NodeElement UI', () => {
  it('should render view', () => {
    const mockTreeObj = {
      content: '',
      attributes: [],
      children: []
    };
    const wrapper = mount(<NodeElement treeObj={mockTreeObj} />);
    expect(wrapper.html()).toBeTruthy();
  });

  it('should contain main action elements (add, edit, open input, delete)', () => {
    const mockTreeObj = {
      content: '',
      attributes: [],
      children: []
    };

    const wrapper = mount(<NodeElement treeObj={mockTreeObj} />);
    const html = wrapper.html();

    // add icon UI element
    expect(html).toContain('<div class="add-icon d-inline-block">+</div>');
    // edit icon UI element
    expect(html).toContain(
      '<i class="far fa-edit edit-icon d-inline-block"></i>'
    );
    // open input UI element
    expect(html).toContain(
      '<div class="d-inline-block custom-property">Open input</div>'
    );
    // delete UI element
    expect(html).toContain('<div class="delete-icon d-inline-block">x</div>');
  });

  it('should contain 3 amount of children elements', () => {
    const mockTreeObj = {
      content: 'value0',
      attributes: [],
      children: [
        {
          content: 'value1',
          attributes: [],
          children: [
            {
              content: 'value2',
              attributes: [],
              children: [{ content: 'value3', attributes: [], children: [] }]
            }
          ]
        }
      ]
    };
    const wrapper = mount(<NodeElement treeObj={mockTreeObj} />);
    const html = wrapper.html();

    expect(wrapper.find('.content')).toHaveLength(3);
    expect(html).toContain('value1');
    expect(html).toContain('value2');
    expect(html).toContain('value3');

    console.log(wrapper.html());
  });

  it('should contain 3 checkboxes', () => {
    const mockTreeObj = {
      content: 'value0',
      attributes: ['checkbox1', 'checkbox2', 'checkbox3'],
      children: []
    };
    const wrapper = mount(<NodeElement treeObj={mockTreeObj} />);
    const html = wrapper.html();

    expect(wrapper.find('.form-check-input')).toHaveLength(3);
    expect(html).toContain('checkbox1');
    expect(html).toContain('checkbox2');
    expect(html).toContain('checkbox3'); 

    console.log(wrapper.html());
  });
});

describe('NodeElement actions', () => {});
