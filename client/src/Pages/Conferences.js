import React, { Fragment } from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Padding } from "styled-components-spacing"

import { Title, SubTitle } from "../Components/Typography"
import Query from "../Components/Query"
import GET_USER from "../Queries/getUser.graphql"

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

const Conferences = () => (
  <Wrapper wrap>
    <IntroductionWrapper wrap size={0.5}>
      <Flex alignCenter justifyCenter full column>
        <Padding horizontal={4}>
          <Query query={GET_USER}>
            {({ userFromGithub }) => (
              <Fragment>
                <Title> Hello {userFromGithub.login}</Title>
                <SubTitle>Start by picking a conference</SubTitle>
              </Fragment>
            )}
          </Query>
        </Padding>
      </Flex>
    </IntroductionWrapper>
    <Grid.Unit wrap size={0.5}>
      <Flex alignCenter justifyCenter full column>
        <Login>List of conferences here</Login>
      </Flex>
    </Grid.Unit>
  </Wrapper>
)

export default Conferences
