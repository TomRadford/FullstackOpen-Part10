import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Pill from './Pill';
import Stat from './Stat';

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 3
  },
  heading: {
    gap: 20,
    flexDirection: 'row'
  },
  headingItems: {
    gap: 2,
    paddingRight: 10,
    flexShrink: 1
  },
  stats: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 25,
    gap: 30
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={style.container}>
      <View style={style.heading}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={style.image} resizeMode="cover" />
        <View style={style.headingItems}>
          <Text fontWeight={'bold'}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <View style={{ paddingTop: 5 }}>
            <Pill>{item.language}</Pill>
          </View>
        </View>
      </View>
      <View style={style.stats}>
        <Stat title="Stars" amount={item.stargazersCount} />
        <Stat title="Forks" amount={item.forksCount} />
        <Stat title="Reviews" amount={item.reviewCount} />
        <Stat title="Rating" amount={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
