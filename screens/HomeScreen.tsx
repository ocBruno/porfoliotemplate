import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Button,
  Pressable,
  Animated,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InfoCard } from '../components/Cards/InfoCard';
import { RootStackParamList } from '../App';
import { ListItemWithIcon } from '../components/Utils/ListItemWithIcon';
import { EntranceScreen } from '../components/Screens/EntranceScreen';

const screenStyles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  moreAboutMeButton: {
    position: 'absolute',
    bottom: 30,
    right: 40,
  },
  getInContactButton: {
    position: 'absolute',
    bottom: 90,
    right: 40,
  },
  homeBackgroundImage: {
    position: 'absolute',
    top: 0,
    width: 1000,
    height: 300,
    resizeMode: 'cover',
  },
});

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  route,
  navigation,
}: HomeScreenProps) => {
  return (
    <EntranceScreen>
      <View style={screenStyles.entranceScreenContainer}>
        <Image
          style={screenStyles.homeBackgroundImage}
          source={require('../public/backgrounds/homeBackgroundImage.jpg')}
        />
        <InfoCard
          topbarTitle="Who"
          header="Bruno Costa"
          subHeader="Frontend Web/Mobile Developer"
        >
          <View>
            <ListItemWithIcon
              title="HTML"
              iconStaticSource={require('../public/icons/html.png')}
            />
            <ListItemWithIcon
              title="CSS"
              iconStaticSource={require('../public/icons/css.png')}
            />
            <ListItemWithIcon
              title="Javascript"
              iconStaticSource={require('../public/icons/js.png')}
            />
            <ListItemWithIcon
              title="React"
              iconStaticSource={require('../public/icons/react.png')}
            />
          </View>
        </InfoCard>
        <View style={screenStyles.getInContactButton}>
          <Button
            color="rgb(130, 151, 255)"
            title="Get in contact"
            onPress={() => navigation.navigate('Contact', {})}
          />
        </View>
        <View style={screenStyles.moreAboutMeButton}>
          <Button
            color="rgb(78, 121, 240)"
            title="More about me"
            onPress={() => navigation.navigate('Profile', {})}
          />
        </View>
      </View>
    </EntranceScreen>
  );
};
