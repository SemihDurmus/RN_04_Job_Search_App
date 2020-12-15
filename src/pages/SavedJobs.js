import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {JobItem} from '../components';
import {saved_jobs} from '../style';

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([]);

  const fetchData = async () => {
    let newJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    newJobList = newJobList == null ? [] : JSON.parse(newJobList);
    setJobList(newJobList);
  };

  const onJobDelete = async (x) => {
    let newJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    newJobList = newJobList == null ? [] : JSON.parse(newJobList);
    newJobList = newJobList.filter((d) => {
      return d.id !== x.id;
    });

    setJobList(newJobList);
    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(newJobList));
  };
  useEffect(() => {
    fetchData();
  }, []);

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
          onPress={() => props.navigation.goBack()}>
          <Text style={saved_jobs.BackButtonText}>
            <Icon name={'chevron-left'} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export {SavedJobs};
