import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';


const initialState = Map({
  todos: List.of(
    Map({
      id: 0,
      text: 'test',
      completed: false
    })
  ),
  visibilityFilter: "SHOW_ALL"
});

describe('reducer', () => {

  it('adds a todo', () => {
    const action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'test 1'
    }
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS(
      {
        ...initialState.toJSON(),
        todos: [
          {
            id: 0,
            text: 'test',
            completed: false
          },
          {
            id: 1,
            text: 'test 1',
            completed: false
          }
        ]
      })
    );
  });

  it('toggles completed', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    }
    const nextState = reducer(initialState, action);
    const nextNextState = reducer(nextState, action);

    expect(nextNextState).to.equal(fromJS(
      {
        ...initialState.toJSON(),
        todos: [
          {
            id: 0,
            text: 'test',
            completed: false
          }
        ],
      })
    );
  });

  it('changes filter', () => {
    const action = {
      type: "SET_VISIBILITY_FILTER",
      filter: "SHOW_ACTIVE"
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS(
      {
        ...initialState.toJSON(),
        visibilityFilter: "SHOW_ACTIVE"
      }
    ));
  });
});