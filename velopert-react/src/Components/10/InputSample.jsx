import React, { useRef, useState } from 'react';

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nampeInput = useRef(null);

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nampeInput.current.focus();
  };

  return (
    <div>
      <input
        name='name'
        onChange={onChange}
        placeholder='이름'
        value={name}
        ref={nampeInput}
        className='border'
      />
      <input
        name='nickname'
        onChange={onChange}
        placeholder='닉네임'
        value={nickname}
        className='border'
      />
      <button onClick={onReset} className='border'>
        초기화
      </button>
      <div className='text-2xl'>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
