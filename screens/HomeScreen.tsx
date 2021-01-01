import { RouteProp } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Image, StyleSheet, Text, View, PanResponder, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InfoCard } from '../components/InfoCard';
import {RootStackParamList} from '../App'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillLogo: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
});


type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};


export const HomeScreen: React.FunctionComponent<HomeScreenProps> =  ({route, navigation}: HomeScreenProps) => {

    return(
      <View style={styles.container}>
        <InfoCard topbarTitle="Skills" header="Bruno Costa" subHeader="Frontend Web/Mobile Developer." >
          <View>
            <Text >
              Html5
            <Image
                style={styles.skillLogo}
                source={require('../public/icons/html5.png')}
              />
            </Text> 
            <Text style={{flexDirection: 'row'}}>
              CSS3
            <Image
                style={styles.skillLogo}
                source={require('../public/icons/css.png')}
              />
            </Text>
            <Text >
              Javascript
              <Image
                style={styles.skillLogo}
                source={require('../public/icons/js.png')}
              />
            </Text>
            <Text>
              React
              <Image
                style={styles.skillLogo}
                source={require('../public/icons/react.png')}
              />
            </Text>
          </View>
        </InfoCard>

                <Button
      title="More about me"
      onPress={() =>
        navigation.navigate('Profile', { title: 'Jane' })
      }
    />


    </View>
    )
}