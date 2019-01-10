import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import './css/style.css';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';

import { withClientState } from 'apollo-link-state';

import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

import resolvers from './resolvers';
import defaults from './defaults';


const defaultState = {
  currentUser: {
    __typename: 'currentUser',
    email: null,
    name: null,
    lastname: null,
    password: null

  }
}
const stateLink = withClientState({
  cache,
  //resolvers,
  defaults: defaultState
});

const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const cache = new InMemoryCache();

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
    cache,
    link: new HttpLink(),
    clientState: {
      defaults,
      resolvers
    },
  }); 

const Root = () => {
    return (
      <ApolloProvider client={client}>
          <Router />
      </ApolloProvider>
    )
  };

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
