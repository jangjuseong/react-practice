import { useState } from "react";

const UsehookListManagementHooks = () => {
  const [list, setList] = useState([]);
  const [updateText, setUpdateText] = useState("");
  const [updateMode, setUpdateMode] = useState(-1);
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    onInsert(text);
    setText("");
  };
  const onChangeUpdate = (e) => {
    setUpdateText(e.target.value);
  };

  const onClickUpdate = (hookListId, hookListText) => {
    setList(
      list.map((element, idx) => {
        if (idx === hookListId) {
          return hookListText;
        } else {
          return element;
        }
      })
    );
    setUpdateMode(-1);
  };

  const onDelete = (hookListIdx) => {
    setList(
      list.filter((e, idx) => {
        return idx !== hookListIdx;
      })
    );
  };

  const onUpdateMode = (idx) => {
    setUpdateMode(idx);
  };

  const onInsert = (text) => {
    setList([...list, text]); 
  };

  return {
    list,
    text,
    updateText,
    updateMode,
    onClick,
    onChange,
    onChangeUpdate,
    onClickUpdate,
    onDelete,
    onUpdateMode,
    onInsert,
  };
};

export default UsehookListManagementHooks;
