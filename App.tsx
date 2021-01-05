import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ContactScreen } from './screens/ContactScreen';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: {};
  Profile: {};
  Contact: {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    width: 66,
    height: 58,
    resizeMode: 'contain',
  },
});

const App: React.FC = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Bruno Costa',
              transitionSpec: {
                open: {
                  animation: 'spring',
                  config: {
                    stiffness: 2000,
                    damping: 500,
                    mass: 3,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                },
                close: {
                  animation: 'spring',
                  config: {
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    overshootClamping: true,
                    restDisplacementThreshold: 0.01,
                    restSpeedThreshold: 0.01,
                  },
                },
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'About Me' }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ title: 'Contact' }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;
