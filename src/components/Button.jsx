import { Pressable, Text } from 'react-native';

export const Button = ({ text, onPress }) => (
  <Pressable onPress={onPress}>
    <Text>{text}</Text>
  </Pressable>
);
