/**
 *
 * TasksPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTasksPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TasksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TasksPage</title>
          <meta name="description" content="Description of TasksPage" />
        </Helmet>
      </div>
    );
  }
}

TasksPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  taskspage: makeSelectTasksPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tasksPage', reducer });
const withSaga = injectSaga({ key: 'tasksPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TasksPage);
