import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../theme';
import Button from './Button';
import LargeInput from './LargeInput';

const styles = StyleSheet.create({
  container: {
    gap: 15,
    backgroundColor: theme.colors.bgSecondary,
    padding: 20
  }
});

const handleSubmit = () => {};

const SignIn = () => {
  return (
    <View style={styles.container}>
      <LargeInput placeholder="Username" />
      <LargeInput placeholder="Password" secureTextEntry />
      <Button onPress={handleSubmit} />
    </View>
  );
};
export default SignIn;
