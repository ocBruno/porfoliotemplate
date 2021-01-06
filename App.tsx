import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ContactScreen } from './screens/ContactScreen';
import { ErrorBoundaryCard } from './components/Cards/ErrorBoundaryCard';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: {};
  Profile: {};
  Contact: {};
};

const EntranceTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(78, 121, 240)',
  },
};

const App: React.FC = () => {
  return (
    <ErrorBoundaryCard>
      <NavigationContainer theme={EntranceTheme}>
        {
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Bruno Costa',
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'About Me',
              }}
            />
            <Stack.Screen
              name="Contact"
              component={ContactScreen}
              options={{
                title: 'Contact',
              }}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </ErrorBoundaryCard>
  );
};

export default App;
