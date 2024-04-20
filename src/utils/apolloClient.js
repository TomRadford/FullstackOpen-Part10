import { ApolloClient, InMemoryCache } from '@apollo/client';
import constants from 'expo-constants';

const createApolloClient = () => {
  return new ApolloClient({
    uri: constants.expoConfig.extra.uri,
    cache: new InMemoryCache(),
    defaultOptions: { query: { fetchPolicy: 'cache-and-network' } }
  });
};

export default createApolloClient;
