import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  pill: {
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 4,
    //make the width fit the content
    alignSelf: 'flex-start'
  }
});

export const Pill = ({ children }) => (
  <View style={styles.pill}>
    <Text fontWeight={'bold'} color={'white'}>
      {children}
    </Text>
  </View>
);

export default Pill;
