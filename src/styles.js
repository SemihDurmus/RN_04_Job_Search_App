import {StyleSheet, Dimensions} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 12,
    margin: 8,
    borderRadius: 6,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
});

export const introduction = StyleSheet.create({
  banner: {
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  bannerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
