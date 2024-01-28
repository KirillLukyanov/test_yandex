import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components';
import { counterActions } from './model/slice/CounterSlice';
import { getCounterValue } from './model/selectors/getCounterValue';
import s from './Counter.module.css';

export const Counter = memo(() => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={s.counter}>
      <h1 data-testid="value-title">{counterValue}</h1>
      <div className={s.buttons}>
        <Button
          onClick={decrement}
        >
          decrement
        </Button>
        <Button
          onClick={increment}
        >
          increment
        </Button>
      </div>

    </div>
  );
});
