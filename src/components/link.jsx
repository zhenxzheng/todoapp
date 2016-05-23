import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';



const Link = ({/*fulfilled,*/ active, children, setVisibility, filter/*, getBundles*/}) => {
  let baseClass = 'filterLink';

  if (active) {
    return <span className={cx(baseClass+'__active')}>{children}</span> ;
  }
  return (
    <a  
      className={cx(baseClass)}
      href='a'
      onClick={ e => {
        e.preventDefault();
        setVisibility(filter);
        // if(!fulfilled) getBundles();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired,
  setVisibility: React.PropTypes.func.isRequired,
  filter: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.get('visibilityFilter'),
    filter: ownProps.filter,
    fulfilled: state.getIn(['bundles', 'isFulfilled'])
  };
};

export const LinkContainer = connect(
  mapStateToProps,
  actionCreators
)(Link);