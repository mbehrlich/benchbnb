import { FILTER_CONSTANTS } from '../actions/filter_actions';
import { merge } from 'lodash';

const FilterReducer = (state = {bounds: {}}, action) => {
  let newState;
  switch (action.type) {
    case FILTER_CONSTANTS.UPDATE_BOUNDS:
      newState = merge({}, state);
      newState.bounds = action.bounds;
      return newState;
    default:
      return state;
  }
};

export default FilterReducer;
