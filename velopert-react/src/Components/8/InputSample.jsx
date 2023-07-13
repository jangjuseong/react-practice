import React, { useState } from 'react';

export default function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} className='border' />
      <button onClick={onReset} className='border'>
        초기화
      </button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}
