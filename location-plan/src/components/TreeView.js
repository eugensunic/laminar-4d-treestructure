import React, { useState } from 'react';
import NodeElement from './NodeElement';

function TreeView() {
  const [treeObj, setState] = useState({
    id: 0,
    content: '',
    children: []
  });

  const [reference, setReference] = useState(null);

  const addNode = (obj, cnt) => {
    console.log(treeObj);
    obj.children.push({
      content: `add text`,
      id: cnt,
      children: []
    });
    // deep clone object
    setState(JSON.parse(JSON.stringify(treeObj)));
  };

  const deleteNode = obj => {
    obj.children = [];
    setState(JSON.parse(JSON.stringify(treeObj)));
  };

  const setNodeText = (obj, value) => {
    obj.content = value;
    setState(JSON.parse(JSON.stringify(treeObj)));
  };

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
    // setState(JSON.parse(JSON.stringify(treeObj)));
  };

  return (
    <NodeElement
      children={treeObj.children}
      addNode={addNode}
      deleteNode={deleteNode}
      setNodeText={setNodeText}
      onDragCallback={onDragCallback}
      onDragOverCallback={onDragOverCallback}
      onDropCallback={onDropCallback}
      treeObj={treeObj}
    />
  );
}

export default TreeView;
