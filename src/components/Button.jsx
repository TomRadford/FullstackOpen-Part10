import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 2
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textWhite,
    textAlign: 'center'
  }
});

const Button = ({ onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Text style={styles.text}>Sign In</Text>
  </Pressable>
);

export default Button;
