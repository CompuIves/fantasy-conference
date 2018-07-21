import React, { Component } from 'react'
import Grid from 'styled-components-grid'
import styled, { keyframes } from 'styled-components'
import Flex from 'styled-flex-component'
import { Padding } from 'styled-components-spacing'
import { GithubLoginButton } from 'react-social-login-buttons'

const showTitle = keyframes`
    0% {
        transform: translateY(-300%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

const Wrapper = styled(Grid)`
  min-width: 100vw;
  min-height: 100vh;
`

const IntroductionWrapper = styled(Grid.Unit)`
  background: ${props => props.theme.blueDark};
  color: ${props => props.theme.white};
`

const Title = styled.h1`
  color: ${props => props.theme.white};
  text-align: center;
  animation: ${showTitle} 0.6s both 0s ease-out;
`

const SubTitle = styled.h2`
  color: ${props => props.theme.blueLight};
  text-align: center;
  animation: ${showTitle} 0.6s both 0.5s ease-out;
`

const Login = styled.h3`
  color: ${props => props.theme.blueDark};
`

class App extends Component {
  render() {
    return (
      <Wrapper wrap>
        <IntroductionWrapper wrap size={0.5}>
          <Flex alignCenter justifyCenter full column>
            <Padding horizontal={4}>
              <Title>Welcome to Fantasy Conferences</Title>
            </Padding>
            <Padding horizontal={4}>
              <SubTitle>
                It's like fantasy footbal but with Frontend Conferences
              </SubTitle>
            </Padding>
          </Flex>
        </IntroductionWrapper>
        <Grid.Unit wrap size={0.5}>
          <Flex alignCenter justifyCenter full column>
            <Login>Login to Play</Login>

            <GithubLoginButton
              onClick={() =>
                (window.location =
                  'http://fantasy-conference-login.now.sh/login')
              }
            />
          </Flex>
        </Grid.Unit>
      </Wrapper>
    )
  }
}

export default App
