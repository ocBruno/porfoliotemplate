import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { InfoCard } from '../components/Cards/InfoCard';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { ReturnButton } from '../components/Buttons/ReturnButton';
import { EntranceScreen } from '../components/Screens/EntranceScreen';

const screenStyles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(206, 237, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userBackgroundImage: {
    borderRadius: 100,
    position: 'absolute',
    right: 30,
    top: 90,
    transform: [{ rotate: '6deg' }],
    width: 160,
    resizeMode: 'contain',
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

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({
  route,
  navigation,
}: ProfileScreenProps) => {
  return (
    <EntranceScreen>
      <View style={screenStyles.entranceScreenContainer}>
        <Image
          style={screenStyles.userBackgroundImage}
          source={require('../public/backgrounds/userBackgroundImage.jpg')}
        />
        <InfoCard
          topbarTitle="About Me"
          header="Experience"
          subHeader="Frontend Web Development"
        >
          Frontend web developer with knowledge in HTML5, CSS, Javascript, React
          and other frameworks/libraries. Professional office and remote
          experience in an agile team participating in daily / weekly tech
          meetings in english and portuguese.
        </InfoCard>
        <ReturnButton />
      </View>
    </EntranceScreen>
  );
};
