import {FETCH_WEATHER} from '../actions/index.js';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //Used concat to avoid state mutation; push modifies state directly
      // concat returns a new array with join
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state];

    default:
      return state;
  }
}
