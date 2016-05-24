import { Map } from 'immutable';
// import { combineReducers } from 'Redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

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