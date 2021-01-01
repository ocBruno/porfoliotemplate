import React, { useState } from 'react';
import { Pressable, StyleSheet, StyleSheetProperties, Text, View, Image } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack  = createStackNavigator()

export type RootStackParamList = {
  Home: { title: string };
  Profile: {title: string}
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
      resizeMode: 'contain'
  },
});

const App: React.FC = () =>  {
  const [infoCardsStack, setInfoCardsStack] = useState([]);

  function popCardFromStack() {
    setInfoCardsStack(currentStack => {
      let poppedStack = currentStack
      poppedStack.pop()
      return poppedStack
    })
  }

  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bruno\'s Curriculum' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'More about me'}} />
      </Stack.Navigator>

    }</NavigationContainer>
  );
}

export default App;