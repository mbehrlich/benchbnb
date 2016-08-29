import { BENCH_CONSTANTS } from '../actions/bench_actions';
import { merge } from 'lodash';

const BenchesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case BENCH_CONSTANTS.RECEIVE_BENCHES:
      newState = action.benches;
      return newState;
    case BENCH_CONSTANTS.RECEIVE_BENCH:
      newState = merge({}, state);
      newState[action.bench.id] = action.bench;
      return newState;
    default:
      return state;
  }
};

export default BenchesReducer;
