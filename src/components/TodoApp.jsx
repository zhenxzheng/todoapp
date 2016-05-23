import React from 'react';
import cx from 'classnames';
// import { Component } from 'react';
// import { connect } from 'react-redux';
import { TodoListContainer } from './todoList';
import { AddTodoContainer } from './addTodo';
import { LinkContainer } from './link';


const TodoApp = () => {

  let baseClass = 'todoApp';

  return (
    <div className={cx(baseClass)}>
      <AddTodoContainer/>
      <TodoListContainer/>
      <Footer/>
    </div>
  );
};

const Footer = () => {
  let baseClass = 'todoFooter';

  return (
    <p className={cx(baseClass)}>
      Show:{' '}
      <LinkContainer filter='SHOW_ALL'>
        ALL
      </LinkContainer>{' '}
      <LinkContainer filter='SHOW_ACTIVE'>
        ACTIVE
      </LinkContainer>{' '}
      <LinkContainer filter='SHOW_COMPLETED'>
        COMPLETED
      </LinkContainer>
    </p>
  );
};


export default TodoApp;