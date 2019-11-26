import React, { useState, useEffect } from 'react';

function NodeElement(props) {
  const {
    children,
    addNode,
    deleteNode,
    treeObj,
    setNodeText,
    onDragCallback,
    onDragOverCallback,
    onDropCallback
  } = props;
  const [cnt, setCounter] = useState(0);
  const [edit, editNode] = useState(false);
  const [isVisible, toggleList] = useState(true);

  useEffect(() => {
    if (!cnt) return;
    addNode(treeObj, cnt);
  }, [cnt]);

  return (
    <div className="comments">
      <button onClick={() => setCounter(cnt + 1)}>Add item</button>
      <button onClick={() => deleteNode(treeObj)}>Delete item</button>
      <button onClick={() => editNode(!edit)}>Edit item</button>
      <button onClick={() => toggleList(!isVisible)}>Collapse</button>

      {edit && (
        <div>
          <input
            type="text"
            onChange={e => setNodeText(treeObj, e.target.value)}
          />
        </div>
      )}
      {isVisible &&
        children.map((x, i) => (
          <div className="comment">
            <span
              draggable
              onDrag={e => onDragCallback(e, treeObj)}
              onDragOver={onDragOverCallback}
              onDrop={e => onDropCallback(e, treeObj)}
            >
              {x.content}
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
                treeObj={x}
              />
            )}
          </div>
        ))}
    </div>
  );
}

export default NodeElement;
