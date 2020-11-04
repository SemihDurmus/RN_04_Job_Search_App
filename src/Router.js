import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Introduction, Jobs, SavedJobs} from './pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="IntroPage" component={Introduction} />
        <Stack.Screen name="JobsPage" component={Jobs} />
        <Stack.Screen name="SavedJobsPage" component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
