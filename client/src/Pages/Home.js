import React, { Component } from 'react'
import Grid from 'styled-components-grid'
import styled, { keyframes } from 'styled-components'
import Flex from 'styled-flex-component'
import { Padding } from 'styled-components-spacing'
import { GithubLoginButton } from 'react-social-login-buttons'
import Logo from '../assets/logo.svg'
import { Title, SubTitle } from '../Components/Typography'

const showLogo = keyframes`
    0% {
        opacity: 0;
        transform: scale(1)
    }
    50% {
      opacity: 1;
      transform: scale(1)
    }
    70% {
      transform: scale(1.1)
    }
    100% {
        opacity: 1;
        transform: scale(1)
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

const Login = styled.h3`
  color: ${props => props.theme.blueDark};
`

const LogoImg = styled.img`
  width: 60%;
  margin: auto;
  display: block;
  animation: ${showLogo} 0.6s both 0s ease-in;
  position: relative;
  z-index: 1;
`

class App extends Component {
  render () {
    return (
      <Wrapper wrap>
        <IntroductionWrapper wrap size={0.5}>
          <Flex alignCenter justifyCenter full column>
            <Padding horizontal={4}>
              <LogoImg src={Logo} />
            </Padding>
            <Padding horizontal={4}>
              <Title animated>Fantasy Conferences</Title>
            </Padding>
            <Padding horizontal={4}>
              <SubTitle animated>
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
                window.location.assign(
                  `http://${
                    process.env.NODE_ENV !== 'development'
                      ? 'fantasy-conference-login.now.sh'
                      : 'localhost:8080'
                  }/login`
                )
              }
            />
          </Flex>
        </Grid.Unit>
      </Wrapper>
    )
  }
}

export default App
