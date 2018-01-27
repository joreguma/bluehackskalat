/**
*
* HeaderComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'
// import styled from 'styled-components';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '0em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

class HeaderComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item link><NavLink to={'/'}>
                <Image size='mini' src='https://instrumentalfx.co/wp-content/uploads/2018/01/Uganda-Knuckles-300x300.jpg' />
                </NavLink></Menu.Item>
              <Menu.Item link><NavLink to={'/discover'}>Discover</NavLink></Menu.Item>
              <Menu.Item link><NavLink to={'/tasks'}>Do Tasks</NavLink></Menu.Item>

              <Menu.Menu position='right'>
              <Menu.Item link><NavLink to={'/'}>Logout</NavLink></Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
    );
  }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;
