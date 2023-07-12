import Hello from './Components/6/Hello';
import Wrapper from './Components/6/Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Hello name='주성' color='red' isSpecial={true} />
        <Hello color='pink' />
      </Wrapper>
    </>
  );
}

export default App;
