import TreeView from '../components/TreeView';
import NodeElement from '../components/NodeElement';
import React from 'react';
import { mount, render, shallow } from 'enzyme';

describe('TreeView', () => {
  it('should render view', () => {
    const wrapper = mount(<TreeView />);
    expect(wrapper.html()).toBeTruthy();
  });

  it('should add element to list and display (total elements:2)', () => {
    const wrapper = mount(<TreeView />);
    // console.log('treeview', wrapper.debug());

    const addItemButton = wrapper.find('.add-icon');
    addItemButton.simulate('click');

    wrapper.update();

    expect(wrapper.find('.add-icon')).toHaveLength(2);
  });

  it('should edit title of node element', () => {
    const wrapper = mount(<TreeView />);

    // add child item for editing
    const addItemButton = wrapper.find('.add-icon');
    addItemButton.simulate('click');
    wrapper.update();

    // trigger input field opening
    const editIconButton = wrapper.find('.edit-icon').at(1);
    editIconButton.simulate('click');
    wrapper.update();

    const editNodeTitleElement = wrapper.find('.edit-node-title').at(0);
    // write value inside input
    editNodeTitleElement.simulate('change', {
      target: { name: '', value: 'newNodeTitle' }
    });
    wrapper.update();

    expect(wrapper.find('.content').text()).toEqual('newNodeTitle');
  });

  it('should show list of children elements', () => {
    const wrapper = mount(<TreeView />);

    const addItemButton = wrapper.find('.add-icon').at(0);

    addItemButton.simulate('click');
    addItemButton.simulate('click');
    wrapper.update();

    expect(
      wrapper
        .find('.children-list')
        .at(0)
        .text()
    ).toBeTruthy();
  });

  it('should hide list of children elements', () => {
    const wrapper = mount(<TreeView />);

    const addItemButton = wrapper.find('.add-icon').at(0);

    addItemButton.simulate('click');
    addItemButton.simulate('click');
    wrapper.update();

    const toggleListElement = wrapper.find('.fa-angle-down').at(0);
    // hide div
    toggleListElement.simulate('click');
    wrapper.update();

    expect(
      wrapper
        .find('.children-list')
        .at(0)
        .text()
    ).toBeFalsy();
  });

  it('should delete element to list and display (total elements:1)', () => {
    const wrapper = mount(<TreeView />);

    const addItemButton = wrapper.find('.add-icon');
    const deleteItemButton = wrapper.find('.delete-icon');
    addItemButton.simulate('click');

    wrapper.update();

    deleteItemButton.simulate('click');

    wrapper.update();

    expect(wrapper.find('.delete-icon')).toHaveLength(1);
  });

  it('should add checkbox UI element to node representing custom attribute ', () => {
    const wrapper = mount(<TreeView />);

    // trigger input field for checkbox value
    const addCheckbox = wrapper.find('.custom-property');
    addCheckbox.simulate('click');

    wrapper.update();
    const inputPropElement = wrapper.find('.insert-prop');
    // write value inside input
    inputPropElement.simulate('change', {
      target: { name: '', value: 'checkbox1' }
    });

    wrapper.update();
    // append checkbox
    addCheckbox.simulate('click');
    wrapper.update();

    expect(wrapper.html()).toContain('checkbox1');
  });
});
