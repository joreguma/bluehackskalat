/**
 *
 * Group
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGroup from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Card, Icon, Image, Embed, Grid, Progress,Header } from 'semantic-ui-react';

export class Group extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="Description of Group" />
        </Helmet>
        <Header as='h1'>Huge Header</Header>
        <Header.Subheader>
          Manage your account settings and set email preferences
        </Header.Subheader>
        <Grid columns='equals'>
          <Grid.Row>
            <Grid.Column width={11}>
              <Embed
                id='LBnUc09MK2w'
                placeholder='https://i.ytimg.com/vi/m0B0V9PU1Vo/maxresdefault.jpg'
                source='youtube'
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header size='huge'>Progress</Header>
              <Header size='large'>29</Header>
                <Header.Subheader>
                  Donation
                </Header.Subheader>

              <Progress value='4' total='5' progress='percent' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

Group.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  group: makeSelectGroup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'group', reducer });
const withSaga = injectSaga({ key: 'group', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Group);
