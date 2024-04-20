import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import { Platform } from 'react-native';
import '@expo/metro-runtime';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

// Allows us to use the Browser-friendly router provider
const Router = Platform.select({
  ios: () => NativeRouter,
  android: () => NativeRouter,
  web: () => BrowserRouter
})();

const apolloClient = createApolloClient();

export default function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </Router>
      <StatusBar style="inverted" />
    </>
  );
}
