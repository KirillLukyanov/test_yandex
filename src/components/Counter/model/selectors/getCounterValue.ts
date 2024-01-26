import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'components/Counter';
import { getCounter } from './getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
