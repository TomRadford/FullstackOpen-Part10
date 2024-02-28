import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textBar,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ onPress, children }) => (
  <Pressable>
    <Text onPress={onPress} style={styles.text}>
      {children}
    </Text>
  </Pressable>
);

export default AppBarTab;
