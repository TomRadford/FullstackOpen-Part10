import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import useMe from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  scroll: { paddingLeft: 20, gap: 20 }
});

const AppBar = () => {
  const { data: meData } = useMe();

  const username = meData?.me?.username;
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    Alert.alert('Sign out', `Are you sure you want to sign out of ${username}?`, [
      {
        text: 'Sign out',
        onPress: async () => {
          await authStorage.removeAccessToken();
          await apolloClient.resetStore();
        }
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab link={'/'}>Repositories</AppBarTab>
        {meData?.me ? (
          <AppBarTab onClick={handleSignOut}>Sign out</AppBarTab>
        ) : (
          <AppBarTab link={'/login'}>Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
