import { Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import { Link, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  },
  text: {
    color: theme.colors.textBar,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ link, onClick, children }) => {
  if (onClick) {
    return (
      <Pressable onPress={onClick}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    );
  }
  if (link) {
    return (
      <Link to={link}>
        <Text style={styles.text}>{children}</Text>
      </Link>
    );
  }
};

export default AppBarTab;
