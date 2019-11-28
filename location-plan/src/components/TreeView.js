import React, { useState } from 'react';
import NodeElement from './NodeElement';
import { deepClone } from '../utils/index';

function TreeView(props) {
  const { title } = props;
  const [treeObj, setState] = useState({
    content: '',
    attributes: [],
    children: []
  });
  const [reference, setReference] = useState(null);

  const addNode = obj => {
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
    e.preventDefault();
    // save dragged object to state
    setReference({ ...obj });
  };

  const onDragOverCallback = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDropCallback = (e, obj) => {
    e.preventDefault();
    // store children's before overriding
    const tempChildren = deepClone(obj);
    // insert dragged object to the dropped area
    obj.children = deepClone(reference.children);
    // preform switch
    reference.children = tempChildren;

    setState(deepClone(treeObj));
  };

  return (
    <div>
      <h3 id="project-heading" className="text-center">
        {title}
      </h3>
      <NodeElement
        firstNodeTitle={'Project'}
        treeObj={treeObj}
        addNode={addNode}
        addAttributesToNode={addAttributesToNode}
        setNodeText={setNodeText}
        deleteNode={deleteNode}
        onDragCallback={onDragCallback}
        onDragOverCallback={onDragOverCallback}
        onDropCallback={onDropCallback}
      />
    </div>
  );
}

export default TreeView;
