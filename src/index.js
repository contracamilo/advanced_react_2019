import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://camigram-server.camiloriveraq.now.sh/graphql'
})

const app = document.getElementById('app')
ReactDOM.render(<ApolloProvider client={client}>
  <App data-test={'component-app'} />
</ApolloProvider>, app)
