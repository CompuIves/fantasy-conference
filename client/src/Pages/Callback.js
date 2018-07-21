import React, { Component } from "react"
import Flex from "styled-flex-component"
import styled from "styled-components"

const Title = styled.h1`
  color: ${props => props.theme.blueDark};
  text-align: center;
`

class Callback extends Component {
  componentDidMount = async () => {
    this.props.login(() => this.props.history.push("/conferences"))
  }
  render() {
    return (
      <Flex alignCenter full justifyCenter>
        <Title>Logging you in</Title>
      </Flex>
    )
  }
}

export default Callback
