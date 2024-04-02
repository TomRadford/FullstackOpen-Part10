import { StyleSheet, TextInput } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    fontSize: theme.fontSizes.subheading,
    borderColor: theme.colors.bgPrimary,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10
  }
});

const LargeInput = ({ placeholder, secureTextEntry = false }) => (
  <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />
);

export default LargeInput;
