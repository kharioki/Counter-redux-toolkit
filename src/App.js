import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './redux/counter';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(45))}>
        Increment by 45
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default App;
