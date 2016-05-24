// import Api from './utils/api';
// import * as types from './constants/bundles';
// import addTodo from 'addTodo';


export const addTodo = text => {
  return {
    type:'ADD_TODO',
    id: window.nextTodoId++,
    text
  };
};

export const setVisibility = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

// export const getBundles = () => ({
//   type: types.GET_BUNDLES,
//   payload: Api.get({
//     // resource: 'auth/status'
//     resource: 'bundle?offset=0&pagesize=5&sortoption=EventDate&sortdirection=Ascending'
//   })
// });