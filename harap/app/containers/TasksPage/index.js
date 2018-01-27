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

import styled from 'styled-components';
import { Card, Icon, Divider, Segment, Header, List, Button, Grid } from 'semantic-ui-react'

export class TasksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TasksPage</title>
          <meta name="description" content="Description of TasksPage" />
        </Helmet>
        <Card centered style={{width: "85%"}}>
          <Card.Header>
          <Segment style={{background: "linear-gradient(141deg, #48E5C2 0%, #1fc8db 51%, #2cb5e8 75%)", border: "0", boxShadow: "0 0 0 0"}} >
            <Grid relaxed="very" textAlign="center" columns={4} style={{padding: "2em 6em"}}>
                <Grid.Row verticalAlign="bottom" style={{color: "white", fontSize: "2.5em", paddingBottom: "0"}}>
                  <Grid.Column>
                    123456
                  </Grid.Column>
                  <Grid.Column>
                    223456
                  </Grid.Column>
                  <Grid.Column>
                    3234567
                  </Grid.Column>
                  <Grid.Column>
                    47654
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="top" style={{paddingTop: "1em"}}>
                  <Grid.Column>
                    LAST PAY
                  </Grid.Column>
                  <Grid.Column>
                    TOTAL DONATIONS
                  </Grid.Column>
                  <Grid.Column>
                    COMPLETED TASKS
                  </Grid.Column>
                  <Grid.Column>
                    PENDING TASKS
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Card.Header>
          <Segment style={{backgroundColor: '#F5F4F9', border: "0", boxShadow: "0 0 0 0", marginTop: "0", marginBottom: "0"}}>
            <Header as='h1' style={{fontWeight: 'normal', paddingLeft: "2%"}}>Available Tasks</Header>
          </Segment>
          <Segment padded="very" style={{border: "0"}}>
            <List divided size="large" relaxed="very">
              <List.Item>
                <Button icon labelPosition='right' floated='right'>
                    DO TASK
                    <Icon name='right arrow' />
                </Button>
                <List.Content>
                  <List.Header>Image Annotation</List.Header>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </List.Content>
              </List.Item>
              <List.Item>
                <Button icon labelPosition='right' floated='right'>
                    DO TASK
                    <Icon name='right arrow' />
                </Button>
                <List.Content>
                  <List.Header>Audio Transcription</List.Header>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </List.Content>
              </List.Item>
              <List.Item>
                <Button icon labelPosition='right' floated='right'>
                    DO TASK
                    <Icon name='right arrow' />
                </Button>
                <List.Content>
                  <List.Header>Image Transcription</List.Header>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </List.Content>
              </List.Item>
              <List.Item>
                <Button icon labelPosition='right' floated='right'>
                    DO TASK
                    <Icon name='right arrow' />
                </Button>
                <List.Content>
                  <List.Header>Categorization</List.Header>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Card>
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
