import Hello from './Components/3/Hello';

function App() {
  const name = 'react';

  return (
    <div className='App'>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
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

export default App;
