import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1 className='text-5xl font-bold'>{number}</h1>
      <button onClick={onIncrease} className='text-2xl border'>
        +1
      </button>
      <button onClick={onDecrease} className='text-2xl border'>
        -1
      </button>
    </div>
  );
}
