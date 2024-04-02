import { StyleSheet, TextInput, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: { gap: 2 },
  input: {
    fontSize: theme.fontSizes.subheading,
    borderColor: theme.colors.bgPrimary,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10
  },
  inputError: {
    borderColor: theme.colors.error
  }
});

const LargeInput = ({ placeholder, value, onChangeText, secureTextEntry = false, error = '' }) => (
  <View style={styles.container}>
    <TextInput
      style={{ ...styles.input, ...(error.length ? styles.inputError : {}) }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    {error.length ? <Text color={'error'}>{error}</Text> : null}
  </View>
);

export default LargeInput;
