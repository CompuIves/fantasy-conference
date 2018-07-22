import React, { Component } from 'react'
import Flex from 'styled-flex-component'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.theme.blueDark};
  text-align: center;
`

class Logout extends Component {
  componentDidMount = async () => {
    this.props.logout(() => this.props.history.push('/'))
  }
  render () {
    return (
      <Flex alignCenter full justifyCenter>
        <Title>Logging you OUT</Title>
      </Flex>
    )
  }
}

export default Logout
