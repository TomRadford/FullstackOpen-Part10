import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'cache-and-network' } }
  });
};

export default createApolloClient;
