import styled, { keyframes } from 'styled-components'
import is from 'styled-is'

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
export const Title = styled.h1`
  color: ${props => props.theme.white};
  text-align: center;
  ${is('animated')`
    animation: ${showTitle} 0.6s both 0.3s ease-in;
  `};
`

export const SubTitle = styled.h2`
  color: ${props => props.theme.blueLight};
  text-align: center;
  ${is('animated')`
    animation: ${showTitle} 0.6s both 0.8s ease-in;
  `};
`
