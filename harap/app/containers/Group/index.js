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

import { Card, Icon, Image, Embed, Grid, Progress,Header, Button,Segment } from 'semantic-ui-react';

export class Group extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="Description of Group" />
        </Helmet>
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              <Embed
                id='LBnUc09MK2w'
                placeholder='https://i.ytimg.com/vi/m0B0V9PU1Vo/maxresdefault.jpg'
                source='youtube'
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <Progress percent={80} size='tiny' color='teal' />
              <Header size='medium'>Php 80,000</Header>
              <Header.Subheader>
                donated of Php 100,000 goal
              </Header.Subheader>
              <Header size='medium'>29</Header>
                <Header.Subheader>
                  Donations
                </Header.Subheader>
              <Button fluid positive size='large'>Donate</Button>
              <div><Icon name='marker' />Mountain Province</div>
              <div><Icon name='compass' />Indigenous People</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card fluid>
        {/* <Header as='h1'>Huge Header</Header>
        <Header.Subheader>
          Manage your account settings and set email preferences
        </Header.Subheader> */}
          <Card.Content>
            <Card.Header>
              <Header as='h1'>Juan dela Cruz</Header>
            </Card.Header>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra> 
            <Card.Header>
              <Header as='h1'>Photos</Header>
            </Card.Header>
            <Image.Group size='medium'>
              <Image src='https://i.ytimg.com/vi/XKxTTnvVal8/maxresdefault.jpg' />
              <Image src='http://i0.kym-cdn.com/entries/icons/original/000/024/188/maxresdefault_(3).jpg' />
              <Image src='https://www.sonicstadium.org/wp-content/uploads/2016/02/rwAx9zt-1024x576.jpg' />
            </Image.Group>
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
