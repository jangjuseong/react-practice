import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name='username'
        placeholder='계정명'
        onChange={onChange}
        value={username}
        className='border'
      />
      <input
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
        className='border'
      />
      <button onClick={onCreate} className='border'>
        등록
      </button>
    </div>
  );
};

export default React.memo(CreateUser);
