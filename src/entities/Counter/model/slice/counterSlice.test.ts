import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducers } from './counterSlice';

describe('getCounter', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(
      counterReducers(state as CounterSchema, counterActions.decremented())
    ).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(
      counterReducers(state as CounterSchema, counterActions.incremented())
    ).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(counterReducers(undefined, counterActions.incremented())).toEqual({
      value: 1
    });
  });
});
