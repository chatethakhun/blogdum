
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PRODUCT_ENDPOINT, TOKEN } from './constant'
const httpLink = createHttpLink({
  uri: PRODUCT_ENDPOINT + 'v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default client