import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab link={'/'}>Repositories</AppBarTab>
        <AppBarTab link={'/login'}>Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
