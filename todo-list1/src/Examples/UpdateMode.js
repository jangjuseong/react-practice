import React from "react";

const UpdateMode = ({
  element,
  idx,
  updateText,
  onClickUpdate,
  onChangeUpdate,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input defaultValue={element} onChange={onChangeUpdate} />
      <button
        onClick={() => {
          onClickUpdate(idx, updateText);
        }}
      >
        수정확인
      </button>
    </div>
  );
};

export default UpdateMode;
