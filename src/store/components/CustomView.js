import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounterSlice,
} from '../features/counter';

const CustomView = () => {
  const [currentCount, setCurrentCount] = useState('');

  const dispatch = useDispatch();

  const counterSlice = useSelector(selectCounterSlice);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  const handleAddCountByAmount = () => {
    if (currentCount === '') {
      return alert('Please, fill in the current count input');
    }

    dispatch(incrementByAmount(parseInt(currentCount)));
    setCurrentCount('');
  };

  return (
    <div>
      <div>
        <p>{counterSlice.count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <div>
        <input
          type='number'
          value={currentCount}
          onChange={(e) => setCurrentCount(e.target.value)}
        />
        <button onClick={handleAddCountByAmount}>Add</button>
      </div>
    </div>
  );
};

export default CustomView;
