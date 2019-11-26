import React, { useState } from 'react';

function NodeElement(props) {
  const {
    treeObj,
    addNode,
    addPropsToNode,
    setNodeText,
    deleteNode,
    onDragCallback,
    onDragOverCallback,
    onDropCallback
  } = props;

  const { children, attributes } = treeObj;

  const [edit, editNode] = useState(false);
  const [isListVisible, toggleList] = useState(true);

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
        style={{ backgroundColor: edit ? '#fff1c9' : '' }}
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

  const addCustomPropsIcon = () => {
    return (
      <div className="d-inline-block" onClick={() => addPropsToNode(treeObj)}>
        add custom
      </div>
    );
  };

  return (
    <div className="parent">
      {edit && (
        <input
          type="text"
          className="form-control length"
          placeholder="Edit item"
          onChange={e => setNodeText(treeObj, e.target.value)}
        />
      )}
      <div className="action-elements">
        {collapseIcon()}
        {addIcon()}
        {editIcon()}
        {addCustomPropsIcon()}
        {deleteIcon()}
      </div>

      {attributes.map(x => (
        <div className="d-inline-block">{x}</div>
      ))}
      {isListVisible &&
        children.map((x, i) => (
          <div className="child">
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
                key={i}
                children={x.children}
                addNode={addNode}
                deleteNode={deleteNode}
                setNodeText={setNodeText}
                onDragCallback={onDragCallback}
                onDragOverCallback={onDragOverCallback}
                onDropCallback={onDropCallback}
                addPropsToNode={addPropsToNode}
                treeObj={x}
              />
            )}
          </div>
        ))}
    </div>
  );
}

export default NodeElement;
