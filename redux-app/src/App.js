import './App.css';
import counterSlice, { selectCount, incrementIfOdd, incrementAsync } from './redux/reducers/counterSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from './redux/store';

function App() {
  const [input, setInput] = useState(0);
  const count = useSelector(selectCount);
  const state = store.getState();
  const dispatch = useDispatch();
  const actions = counterSlice.actions;

  const handleClick = (type) => {
    if (type === 'inc') {
      dispatch(actions.incremented());
    } else if (type === 'dec') {
      dispatch(actions.decremented());
    } else {
      dispatch(actions.incrementByAmount(input));
    }
  }

  return (
    <div className='app'>
      <div>Here is a simple counter: {state.counter.value}</div>
      <button className='button' onClick={() => handleClick('inc')}>Increment + 1</button>
      <button className='button' onClick={() => handleClick('dec')}>Decrement - 1</button>
      <button className='button' onClick={() => handleClick('amount')}>Increment By Amount</button>
      <button className='button'
        onClick={() => dispatch(incrementAsync(input))}
      >
        Add By Amount Async
      </button>
      <input style={{ height: '22px', width: '190px' }} type='number' value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
