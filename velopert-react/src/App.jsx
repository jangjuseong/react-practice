import Hello from './Components/5/Hello';
import Wrapper from './Components/5/Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Hello name='주성' color='red'></Hello>
        <Hello color='pink'></Hello>
      </Wrapper>
    </>
  );
}

export default App;
