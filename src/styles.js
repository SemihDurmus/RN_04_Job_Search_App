import {StyleSheet, Dimensions} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 16,
    width: 150,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const intro = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00b894',
  },
  bannerTop: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerBottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 50,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  scrollArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export const jobs = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00b894',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 40,
  },
  modalContainer: {
    backgroundColor: '#c8d6e5',
    margin: 8,
    padding: 10,
    paddingTop: 14,
    borderWidth: 2,
    borderColor: '#833471',
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#833471',
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalScroll: {
    height: Dimensions.get('screen').height * 0.3,
    // backgroundColor: '#FFC312',
    padding: 10,
    borderWidth: 2,
    borderColor: '#833471',
    borderRadius: 8,
    marginVertical: 12,
  },
  saveButton: {
    backgroundColor: '#833471',
    padding: 10,
    borderRadius: 8,
    marginVertical: 12,
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  gotoFavButton: {
    backgroundColor: '#feca57',
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    right: 9,
    width: 150,
  },
  gotoFavButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#576574',
    textAlign: 'center',
  },
});

export const jobItem = StyleSheet.create({
  container: {
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    backgroundColor: '#222f3e',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#feca57',
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#c8d6e5',
  },
  trash: {
    position: 'absolute',
    top: 26,
    right: 20,
  },
});

export const saved_jobs = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c8d6e5',
  },
  container: {flex: 1},

  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#6F1E51',
    textAlign: 'center',
    marginVertical: 40,
  },
  BackButton: {
    backgroundColor: '#feca57',
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    right: 9,
    width: 150,
  },
  BackButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#576574',
    textAlign: 'center',
  },
});
