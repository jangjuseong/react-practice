import React from "react";
import NotUpdateMode from "./NotUpdateMode.js";
import UpdateMode from "./UpdateMode.js";

const TodoListContent = ({
  list,
  updateText,
  updateMode,
  onChangeUpdate,
  onClickUpdate,
  onDelete,
  onUpdateMode,
}) => {
  return (
    <div>
      {list?.map((element, idx) => {
        return (
          <div key={idx} style={{ display: "flex" }}>
            {updateMode === idx ? (
              <UpdateMode
                element={element}
                idx={idx}
                updateText={updateText}
                onClickUpdate={onClickUpdate}
                onChangeUpdate={onChangeUpdate}
              />
            ) : (
              <NotUpdateMode element={element} />
            )}
            <button onClick={() => onUpdateMode(idx)}>수정</button>
            <button onClick={() => onDelete(idx)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListContent;
