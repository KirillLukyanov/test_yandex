import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './model/slice/CounterSlice';
import { getCounterValue } from './model/selectors/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button
        type="button"
        onClick={increment}
      >
        increment
      </button>
      <button
        type="button"
        onClick={decrement}
      >
        decrement
      </button>
    </>
  );
};
