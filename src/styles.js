import {StyleSheet, Dimensions} from 'react-native';

export const introduction = StyleSheet.create({
  banner: {
    height: Dimensions.get('window').height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fed330',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 40,
    color: '#7158e2',
  },
  bannerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  scrollArea: {
    height: Dimensions.get('window').height * 0.2,
    backgroundColor: '#FFF',
  },
});

export const topicItem = StyleSheet.create({
  container: {
    padding: 12,
    margin: 7,
    borderRadius: 6,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export const jobItem = StyleSheet.create({
  container: {
    padding: 12,
    margin: 7,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#fffa65',
  },
  jobname: {
    fontWeight: 'bold',
  },
});

export const jobs = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  modalBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalHeader: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  jobSubTitle1: {
    fontWeight: 'bold',
    color: 'brown',
    fontSize: 18,
  },
  jobSubTitle2: {
    fontWeight: 'bold',
    color: 'darkgreen',
    fontSize: 18,
  },

  jobDesc: {
    padding: 10,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor: '#fffa65',
  },
  showFavBackground: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  showFavText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
