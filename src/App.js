// import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Redux</Text>
        <Text style={styles.text}>npm install redux react-redux</Text>
        <Text style={styles.title}>Axios</Text>
        <Text style={styles.text}>npm install axios</Text>
        <Text style={styles.title}>Navigation</Text>
        <Text style={styles.text}>npm install @react-navigation/native</Text>
        <Text style={styles.text}>
          npm install react-native-reanimated react-native-gesture-handler
          react-native-screens react-native-safe-area-context
          @react-native-community/masked-view
        </Text>
        <Text style={styles.text}>npx pod-install ios</Text>
        <Text style={styles.text}>npm install @react-navigation/stack</Text>
        <Text style={styles.notyet}>
          npm install @react-navigation/bottom-tabs
        </Text>
        <Text style={styles.title}>React Native Modal</Text>
        <Text style={styles.text}>npm i react-native-modal</Text>
        <Text style={styles.title}>Async Storage</Text>
        <Text style={styles.text}>
          npm install @react-native-async-storage/async-storage
        </Text>
        <Text style={styles.text}>npx pod-install</Text>
        <Text style={styles.title}>Vector Icons</Text>
        <Text style={styles.text}>
          npm install --save react-native-vector-icons
        </Text>
        <Text style={styles.notyet}>
          Edit android-app-Build.gradle file and the changes at X-Code
        </Text>
        <Text style={styles.title}>Firebase</Text>
        <Text style={styles.notyet}>
          npm install --save @react-native-firebase/app
        </Text>
        <Text style={styles.notyet}>
          Make necessary changes declared on the document
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
    color: 'brown',
  },
  text: {
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
  },
  notyet: {
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
    color: 'grey',
  },
});
