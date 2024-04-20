import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import { Platform } from 'react-native';
import '@expo/metro-runtime';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

// Allows us to use the Browser-friendly router provider
const Router = Platform.select({
  ios: () => NativeRouter,
  android: () => NativeRouter,
  web: () => BrowserRouter
})();

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </Router>
      <StatusBar style="inverted" />
    </>
  );
}
