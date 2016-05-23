import { Map } from 'immutable';
import * as types from './constants/bundles';

export const myBundles = (state = Map(), action) => {
  switch(action.type) {
  case `${types.GET_BUNDLES}_PENDING`:
    return Map({
      loading: 'true'
    });
  case `${types.GET_BUNDLES}_FULFILLED`:
    return Map({
      isFulfilled: true,
      data: action.payload
    });
  case `${types.GET_BUNDLES}_REJECTED`:
    return Map({
      isRejected: true,
      error: action.payload
    });
  default: return state;
  }
};