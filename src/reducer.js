import { List, Map } from 'immutable';
// import * as types from './constants/bundles';
// import { combineReducers } from 'Redux';

const todo = (state, action) =>{
  switch (action.type) {
  case 'ADD_TODO':

    return Map({
      id: action.id,
      text: action.text,
      completed: false
    });
  case 'TOGGLE_TODO':
    if (state.get('id') !== action.id) {
      return state;
    }
    return state.set('completed', !state.get('completed'));
  default:
    return state;
  }
};

const todos = (state = List(), action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return state.push(
      todo(undefined, action)
    );
  case 'TOGGLE_TODO':
    return state.map(t => todo(t, action));
  default:
    return state;
  }
};


const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter;
  default:
    return state;
  }
};

// const bundles = (state = Map(), action) => {
//   switch(action.type) {
//   case `${types.GET_BUNDLES}_PENDING`:
//     return Map({
//       loading: 'true'
//     });
//   case `${types.GET_BUNDLES}_FULFILLED`:
//     return Map({
//       isFulfilled: true,
//       data: action.payload
//     });
//   case `${types.GET_BUNDLES}_REJECTED`:
//     return Map({
//       isRejected: true,
//       error: action.payload
//     });
//   default: return state;
//   }
// };

const combineReducers = (reducers) => {
  return (state = Map(), action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        return nextState.set(key, reducers[key](
          state.get(key),
          action
        ));
      },
      Map()
    );
  };
};

export default combineReducers({
  todos,
  visibilityFilter
  // bundles
});