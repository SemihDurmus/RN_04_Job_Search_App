import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {TopicItem} from '../components';
import {intro} from '../style';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: '#fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '#007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: '#A3CB38',
  },
  {
    id: 3,
    name: '.NET',
    color: '#023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '#001845',
  },
  {
    id: 5,
    name: 'Go',
    color: '#f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: '#e63946',
  },
  {
    id: 7,
    name: 'C',
    color: '#fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '#833471',
  },
];

const Introduction = (props) => {
  const selectLanguage = (lang) => {
    props.navigation.navigate('JobsPage', {selectedLanguage: lang});
  };

  return (
    <SafeAreaView style={intro.safeArea}>
      <View style={intro.bannerTop}>
        <Icon name={'superpowers'} size={90} color={'#FFF'} />
        <Text style={intro.title}>Job Search App</Text>
        <Text style={intro.desc}>Select the programming language</Text>
        <Text style={intro.desc}>to search jobs</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{alignItems: 'center'}}
        style={intro.scrollArea}
        bounces={true}>
        {topics.map((t) => {
          return (
            <TopicItem
              key={t.id}
              item={t}
              onSelect={() => selectLanguage(t.name)}
            />
          );
        })}
      </ScrollView>
      <View style={intro.bannerBottom}></View>
    </SafeAreaView>
  );
};

export {Introduction};
