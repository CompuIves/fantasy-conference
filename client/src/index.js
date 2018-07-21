import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Pages/Home'
import getParameterByName from './utils/getParams'
import Menu from './Components/Menu'
import Callback from './Pages/Callback'
import Logout from './Pages/Logout'
import Conferences from './Pages/Conferences'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '../node_modules/styled-components'

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: async operation => {
    const token = await localStorage.getItem('gh-token')
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  }
})

const theme = {
  white: 'rgba(255, 252, 253, 1)',
  blueDark: 'rgba(1, 23, 47, 1)',
  green: 'rgba(0, 99, 93, 1)',
  blueLight: 'rgba(8, 164, 189, 1)',
  blue: 'rgba(68, 109, 246, 1)'
}

class App extends Component {
  state = {
    authenticated: null
  }

  componentDidMount = async () => {
    const token = await localStorage.getItem('gh-token')
    this.setState({
      authenticated: token !== 'null'
    })
  }

  login = async cb => {
    await localStorage.setItem('gh-token', getParameterByName('code'))
    await localStorage.setItem('gh-state', getParameterByName('state'))
    this.setState(
      {
        authenticated: true
      },
      () => cb()
    )
  }

  logout = async cb => {
    await localStorage.removeItem('gh-token')
    await localStorage.removeItem('gh-state')
    this.setState(
      {
        authenticated: false
      },
      () => cb()
    )
  }

  render() {
    const { authenticated } = this.state
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router>
            <div id="router">
              <Menu authenticated={authenticated} />

              <Route
                exact
                path="/"
                render={props =>
                  !authenticated ? (
                    <Home {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/conferences'
                      }}
                    />
                  )
                }
              />
              <Route
                path="/callback"
                render={props => <Callback {...props} login={this.login} />}
              />

              <Route
                path="/logout"
                render={props => <Logout {...props} logout={this.logout} />}
              />

              <Route
                path="/conferences"
                render={props =>
                  authenticated ? (
                    <Conferences {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/'
                      }}
                    />
                  )
                }
              />
            </div>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

// <Route path="/conferences" component={Conferences} />
// <Route path="/conference/:id" component={Conference} />
// <Route path="/callback" component={Callback} />
// <Route path="/logout" component={Logout} />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
