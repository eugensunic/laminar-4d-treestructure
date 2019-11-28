import React, { useState } from 'react';
import NodeElement from './NodeElement';
import { deepClone } from '../utils/index';

function TreeView() {
  const [treeObj, setState] = useState({
    content: '',
    attributes: [],
    children: []
  });

  const [reference, setReference] = useState(null);

  const addNode = obj => {
    // console.log(treeObj);
    obj.children.push({
      content: `add text`,
      attributes: [],
      children: []
    });
    setState(deepClone(treeObj));
  };

  const deleteNode = obj => {
    obj.children = [];
    setState(deepClone(treeObj));
  };

  const addAttributesToNode = (obj, value) => {
    obj.attributes.push(value);
    setState(deepClone(treeObj));
  };

  const setNodeText = (obj, value) => {
    obj.content = value;
    setState(deepClone(treeObj));
  };

  // drag-drop functions
  const onDragCallback = (e, obj) => {
    console.log('dragging!');
    e.stopPropagation();
    e.preventDefault();
    setReference(obj.children);
  };

  const onDragOverCallback = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDropCallback = (e, obj) => {
    console.log('treeObj', treeObj);
    console.log('drop obj:', obj, 'ref obj:', reference);
    e.stopPropagation();
    e.preventDefault();
    // let temp = obj;
    treeObj.children = reference.children;
    // reference.children = temp.children;
    // obj.children = [{ content: 'kabuuuum' }];
    // setState(deepClonetreeObj)));
  };

  return (
    <NodeElement
      treeObj={treeObj}
      addNode={addNode}
      addAttributesToNode={addAttributesToNode}
      setNodeText={setNodeText}
      deleteNode={deleteNode}
      onDragCallback={onDragCallback}
      onDragOverCallback={onDragOverCallback}
      onDropCallback={onDropCallback}
    />
  );
}

export default TreeView;
