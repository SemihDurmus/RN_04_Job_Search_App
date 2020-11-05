import React from 'react';
import {View, TextInput} from 'react-native';
import {searchBar} from '../style';

const SearchBar = (props) => {
  return (
    <View style={searchBar.container}>
      <TextInput
        placeholder={props.place}
        placeholderTextColor="#576574"
        style={searchBar.text}
        onChangeText={(val) => props.changeText(val)}
      />
    </View>
  );
};

export {SearchBar};
