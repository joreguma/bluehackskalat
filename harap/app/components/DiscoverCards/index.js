/**
*
* DiscoverCards
*
*/

import React from 'react';
import { Icon, Button, Card, Image, Progress } from 'semantic-ui-react'
// import styled from 'styled-components';

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

class DiscoverCards extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card.Group>  
        <Card href='/discover/01'>
        <Image src='https://instrumentalfx.co/wp-content/uploads/2018/01/Uganda-Knuckles-300x300.jpg' />
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
            <Progress value='4' total='5' progress='percent' />
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

DiscoverCards.propTypes = {

};

export default DiscoverCards;
