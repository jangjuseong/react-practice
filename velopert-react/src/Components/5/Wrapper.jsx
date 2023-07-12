import React from 'react';

export default function Wrapper({ children }) {
  return (
    <div className='border-2 border-solid border-black p-4'>{children}</div>
  );
}
