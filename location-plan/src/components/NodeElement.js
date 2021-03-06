import React, { useState } from 'react';
import Checkbox from './Checkbox';

function NodeElement(props) {
  const {
    firstNodeTitle,
    treeObj,
    addNode,
    addAttributesToNode,
    setNodeText,
    deleteNode,
    onDragCallback,
    onDragOverCallback,
    onDropCallback
  } = props;

  const { children, attributes } = treeObj;

  const [edit, editNode] = useState(false);
  const [customAttribute, addCustomAttribute] = useState({
    activateInput: false,
    value: null
  });
  const [isListVisible, toggleList] = useState(true);

  const isFirstNode = () => !treeObj.content;

  const collapseIcon = () => {
    return isListVisible ? (
      <i
        onClick={() => toggleList(!isListVisible)}
        className="fas fa-angle-down arrow-icon"
      ></i>
    ) : (
      <i
        onClick={() => toggleList(!isListVisible)}
        className="fas fa-angle-right arrow-icon"
      ></i>
    );
  };
  const addIcon = () => {
    return (
      <div className="add-icon d-inline-block" onClick={() => addNode(treeObj)}>
        +
      </div>
    );
  };
  const editIcon = () => {
    return (
      <i
        className="far fa-edit edit-icon d-inline-block"
        style={{ backgroundColor: edit ? '#fff1c9' : null }}
        onClick={() => editNode(!edit)}
      ></i>
    );
  };

  const deleteIcon = () => {
    return (
      <div
        className="delete-icon d-inline-block"
        onClick={() => deleteNode(treeObj)}
      >
        x
      </div>
    );
  };

  const addCustomAttributeIcon = () => {
    return customAttribute.activateInput ? (
      <div
        className="d-inline-block custom-property"
        onClick={() => {
          addCustomAttribute({ ...customAttribute, activateInput: false });
          addAttributesToNode(treeObj, customAttribute.value);
        }}
      >
        Add item
      </div>
    ) : (
      <div
        className="d-inline-block custom-property"
        onClick={() => {
          addCustomAttribute({ ...customAttribute, activateInput: true });
        }}
      >
        Open input
      </div>
    );
  };

  const insertCustomProp = () => {
    return (
      <div>
        <input
          type="text"
          className="form-control length d-inline-block insert-prop"
          placeholder="Attribute name"
          onChange={e =>
            addCustomAttribute({ ...customAttribute, value: e.target.value })
          }
        />
      </div>
    );
  };

  return (
    <div className="parent">
      {isFirstNode() && <span id="first-node">{firstNodeTitle}</span>}
      {edit && (
        <input
          type="text"
          className="form-control length d-inline-block edit-node-title"
          placeholder="Edit item"
          onChange={e => setNodeText(treeObj, e.target.value)}
        />
      )}
      {customAttribute.activateInput && insertCustomProp()}
      <div className="action-elements">
        {collapseIcon()}
        {addIcon()}
        {deleteIcon()}
        {!isFirstNode() && editIcon()}
        {!isFirstNode() && addCustomAttributeIcon()}
      </div>
      <div id="checkbox-container">
        {attributes.map((val, i) => (
          <Checkbox key={i} id={i} value={val} />
        ))}
      </div>
      <div className="children-list">
        {isListVisible &&
          children.map((x, i) => (
            <div className="child" key={i}>
              <span
                draggable
                onDrag={e => onDragCallback(e, treeObj)}
                onDragOver={onDragOverCallback}
                onDrop={e => onDropCallback(e, treeObj)}
              >
                <span className="content">{x.content}</span>
              </span>
              {x.children && (
                <NodeElement
                  children={x.children}
                  addNode={addNode}
                  deleteNode={deleteNode}
                  setNodeText={setNodeText}
                  onDragCallback={onDragCallback}
                  onDragOverCallback={onDragOverCallback}
                  onDropCallback={onDropCallback}
                  addAttributesToNode={addAttributesToNode}
                  treeObj={x}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default NodeElement;
