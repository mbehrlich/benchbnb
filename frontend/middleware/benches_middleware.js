import { BENCH_CONSTANTS, receiveBenches, requestBenches, receiveBench } from '../actions/bench_actions';
import { fetchBenches, createBench } from '../util/bench_api_util';
import { FILTER_CONSTANTS, updateBounds } from '../actions/filter_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case BENCH_CONSTANTS.REQUEST_BENCHES:
      success = (data) => dispatch(receiveBenches(data));
      const filters = getState().filters
      fetchBenches(filters, success);
      break;
    case FILTER_CONSTANTS.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
      break;
    case BENCH_CONSTANTS.CREATE_BENCH:
      success = (data) => dispatch(receiveBench(data));
      createBench(action.bench, success)
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
