import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { addTodo } from '../action_creators';

let AddTodo = ({ dispatch, className }) => {
  let baseClass = 'addTodo';
  let placeholderText = 'Type here...';
  let input;
  return (
    <form className={cx(baseClass, className)}>
      <input
        className={cx(baseClass+'__input')}
        placeholder={placeholderText}
        ref={node => {
          input = node;
        }}
      />
      <button
        className={cx(baseClass+'__button')}
        type="submit"
        onClick={(e)=> {
          e.preventDefault();
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        +
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

export const AddTodoContainer = connect()(AddTodo);