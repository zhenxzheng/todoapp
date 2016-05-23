import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
  case 'SHOW_ALL':
    return todos;
  case 'SHOW_COMPLETED':
    return todos.filter(
      t => t.get('completed')
    );
  case 'SHOW_ACTIVE':
    return todos.filter(
      t => !t.get('completed')
    );
  }
};

const Todo = ({onClick, completed, text}) => {
  let baseClass = 'todoItem';
  return (
    <li
      className={cx(
        baseClass,
        {completed: completed}
      )}
      onClick={onClick}
    >
      {text}
    </li>
  );
};
Todo.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool,
  text: React.PropTypes.string
};

const TodoList = ({/*bundles,*/ todos, onTodoClick}) => {
  let baseClass = 'todoList';
  return (
    <ul className = {cx(baseClass)}>
      {todos.map(todo => 
        <Todo
          key={todo.get('id')}
          {...todo.toJSON()}
          onClick={() => onTodoClick(todo.get('id'))}
        />

      )}
      {/*bundles.get('loading')?<p>loading</p>:''*/}
    </ul>
  );
};
TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  onTodoClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos:  getVisibleTodos(
          state.get('todos'),
          state.get('visibilityFilter')
        ),
    bundles: state.get('bundles')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);