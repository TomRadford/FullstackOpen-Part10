import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    color: '#234'
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository App</Text>
    </View>
  );
};

export default Main;
