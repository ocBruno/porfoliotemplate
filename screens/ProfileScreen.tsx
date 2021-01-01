import React, { useRef } from 'react';
import { Animated, StyleSheet, StyleSheetProperties, Text, View, PanResponder } from 'react-native';
import { InfoCard } from '../components/InfoCard';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../App'

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

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> =  (props: ProfileScreenProps) => {

    return(
        <View style={styles.container}>
        <InfoCard header="Experience" title="Skills" content="Html5 CSS3 Javascript React" />

        </View>
    )
}