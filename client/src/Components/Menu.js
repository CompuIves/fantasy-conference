import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: absolute;
  right: 5%;
  top: 40px;
`

const Item = styled.li`
  list-style: none;

  a:not(:last-child) {
    margin-right: 20px;
  }

  a {
    color: ${props => props.theme.green};
    text-decoration: none;
    font-weight: bold;
  }
`

export default ({ authenticated }) => (
  <Nav>
    {authenticated ? (
      <Fragment>
        <Item>
          <Link to="/conferences">Home</Link>
          <Link to="/logout">Logout</Link>
        </Item>
      </Fragment>
    ) : (
      <Item>
        <Link to="/">Home</Link>
      </Item>
    )}
  </Nav>
)
