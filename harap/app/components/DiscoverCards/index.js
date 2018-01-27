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
        <Image src='https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.0-9/27073183_1899035907077765_8024547455131246929_n.jpg?_nc_eui2=v1%3AAeHxdkiz8MErRqwbLMbdwwZ-oOxpLRvNE6Tl9prvXQrzEBaladpQIAOKssKrEq6Bae5EkpApxRHrVZBsLxlQrjQpSO0ExxBqBeC4S4xvLq1bSA&oh=6dca9d3db805497a3e84c47378c1ae28&oe=5ADE8C21' />
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
        <Card href='/discover/01'>
        <Image src='https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.0-9/26815553_1899035913744431_8747293209330775435_n.jpg?_nc_eui2=v1%3AAeGRYwufgXLyZWf3jz8OkKvMwmAEEfURJu8oOesSYw9iOfl4sgr-3_O2JycQi-pqyCLBwNSEXM7NYE0fjeman69mnaCTx_nM0wSLM5hvPzYO9A&oh=f49e3201f6af535f29936c742239428f&oe=5AECE668' />
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
        <Card href='/discover/01'>
        <Image src='https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.0-9/27072708_1899035910411098_1371714941994876320_n.jpg?_nc_eui2=v1%3AAeEjbzUqj0am8BcL41l9Zv-WgJ3g4L-sR06Xyo_NeBHDGpGTANbFSAY7tkuNzi0cHO7gRh_FW7wdMYlKh4tbo4ZSUfG1xiZUCKMMl_pq65U_kA&oh=5416c310c1838b2f1f5651dffe21a4ce&oe=5B1DB774' />
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
