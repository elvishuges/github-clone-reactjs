import { ApolloClient, InMemoryCache } from '@apollo/client';
export const apolloServerBaseURL = 'https://48p1r2roz4.sse.codesandbox.io'

const client = new ApolloClient({
  uri: apolloServerBaseURL,
  cache: new InMemoryCache()
});

export default client



