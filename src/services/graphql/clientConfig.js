import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
export const apolloServerBaseURL = 'https://48p1r2roz4.sse.codesandbox.io'


const httpLink = createHttpLink({
  uri: apolloServerBaseURL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// link: authLink.concat(httpLink),



const client = new ApolloClient({
  uri: apolloServerBaseURL,
  cache: new InMemoryCache()
});

export default client



