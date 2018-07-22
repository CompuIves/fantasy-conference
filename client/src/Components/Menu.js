import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Query from './Query'
import GET_USER from '../Queries/getUser.graphql'

const Nav = styled.nav`
  position: absolute;
  right: 5%;
  top: 40px;
  display: flex;
`

const Item = styled.li`
  list-style: none;
  color: ${props => props.theme.green};
  text-decoration: none;
  font-weight: bold;
  align-items: center;
  display: flex;

  &:not(:last-child) {
    margin-right: 20px;
  }

  img {
    margin-left: 5px;
  }

  a {
    color: ${props => props.theme.green};
    text-decoration: none;
    font-weight: bold;
  }
`

const Menu = ({ authenticated }) => (
  <Nav>
    {authenticated ? (
      <Fragment>
        <Item>
          <Link to="/conferences">Home</Link>
        </Item>
        <Item>
          <Link to="/logout">Logout</Link>
        </Item>
        <Query query={GET_USER}>
          {({ userFromGithub }) => (
            <Item>
              {userFromGithub.login}
              <img
                src={userFromGithub.avatar_url}
                width="30px"
                height="30px"
                alt={userFromGithub.login}
              />
            </Item>
          )}
        </Query>
      </Fragment>
    ) : (
      <Item>
        <Link to="/">Home</Link>
      </Item>
    )}
  </Nav>
)

export default Menu
