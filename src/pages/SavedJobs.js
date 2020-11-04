import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {saved_jobs} from '../style';

import {JobItem} from '../components';

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([]);
  //
  const [jobToDelete, setJobToDelete] = useState([]);

  AsyncStorage.getItem('@SAVED_JOBS').then((res) => {
    const list = JSON.parse(res);
    setJobList(list);
  });

  // const onJobDelete = async (x) => {
  //   let newJobList = await AsyncStorage.getItem('@SAVED_JOBS');

  //   newJobList = newJobList == null ? [] : JSON.parse(newJobList);

  //   const updatedJobList = [...newJobList, jobToDelete];

  //   AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList));
  // };

  return (
    <SafeAreaView style={saved_jobs.safeArea}>
      <View style={saved_jobs.container}>
        <Text style={saved_jobs.title}>Favourites</Text>
        <FlatList
          keyExtractor={(_, index) => index}
          data={jobList}
          renderItem={({item}) => (
            <JobItem
              job={item}
              trash={true}
              onDelete={() => onJobDelete(item)}
            />
          )}
        />
        <TouchableOpacity
          style={saved_jobs.BackButton}
          onPress={() => props.navigation.navigate('JobsPage')}>
          <Text style={saved_jobs.BackButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
