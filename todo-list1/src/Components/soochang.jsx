import { useState } from 'react';

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [updateText, setUpdateText] = useState();
  const [updateMode, setUpdateMode] = useState(-1);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onInsert = (text) => {
    setList([...list, text]); //[...list,text] = ['1234','abcd','가나다']
    setText(''); //input 초기화
  };
  const onDelete = (listIdx) => {
    setList(
      list.filter((e, idx) => {
        return idx !== listIdx;
      })
    );
  };
  const onChangeUpdate = (e) => {
    setUpdateText(e.target.value);
  };
  const onUpdateMode = (idx) => {
    setUpdateMode(idx);
  };
  const onClickUpdate = (listId, listText) => {
    setList(
      list.map((element, idx) => {
        if (idx === listId) {
          return (element = listText);
        } else {
          return element;
        }
      })
    );

    setUpdateMode(-1);
  };
  return (
    <div>
      <input value={text || ''} onChange={onChange} />
      <button onClick={() => onInsert(text)}>입력</button>
      {list?.map((element, idx) => {
        return (
          <div key={idx} style={{ display: 'flex' }}>
            {updateMode === idx ? (
              <div style={{ display: 'flex' }}>
                <input defaultValue={element} onChange={onChangeUpdate} />
                <button
                  onClick={() => {
                    onClickUpdate(idx, updateText);
                  }}
                >
                  수정확인
                </button>
              </div>
            ) : (
              <div>{element} </div>
            )}
            <button onClick={() => onUpdateMode(idx)}>수정</button>
            <button onClick={() => onDelete(idx)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
