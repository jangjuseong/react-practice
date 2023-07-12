import React from 'react';
import Hello from '../3/Hello';

export default function Jsx() {
  const name = 'react';
  return (
    <div>
      <input className='border' />
      <br />
      /* 중괄호로 감싸지 않으면 화면에 보인다. */
      <Hello
      // 열리는 태그 내에서는 주석 사용 가능
      />
      <div className='bg-black text-2xl p-0.5 text-blue-400'>{name}</div>
      <div className='w-16 h-16 bg-gray-700'></div>
    </div>
  );
}
