import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import { Platform } from 'react-native';

// Allows us to use the Browser-friendly router provider
const Router = Platform.select({
  ios: () => NativeRouter,
  android: () => NativeRouter,
  web: () => BrowserRouter
})();

export default function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
      <StatusBar style="inverted" />
    </>
  );
}
