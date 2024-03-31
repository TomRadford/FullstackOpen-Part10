import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { formatNumber } from '../utils/format';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 5
  },
  text: {
    textAlign: 'center'
  }
});

const Stat = ({ title, amount }) => (
  <View style={styles.container}>
    <Text style={styles.text} fontWeight="bold" fontSize={'subheading'}>
      {formatNumber(amount)}
    </Text>

    <Text style={styles.text}>{title}</Text>
  </View>
);

export default Stat;
