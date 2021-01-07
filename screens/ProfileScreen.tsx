import React from 'react';
import { Image, StyleSheet, View, Animated } from 'react-native';
import { InfoCard } from '../components/Cards/InfoCard';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

import { ReturnButton } from '../components/Buttons/ReturnButton';
import { EntranceScreenContainer } from '../components/Containers/EntranceScreenContainer';
import { SlidingText } from '../components/Animations/SlidingText';
import { SlidingView } from '../components/Animations/SlidingView';

const styles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(22, 44, 87)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userBackgroundImage: {
    borderRadius: 100,
    top: -530,
    zIndex: 1,
    width: 540,
    height: 60,
    position: 'absolute',
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
    <EntranceScreenContainer>
      <Animated.View style={styles.entranceScreenContainer}>
        <SlidingView animationDelay={0}>
          <InfoCard
            topbarTitle="About Me"
            header="Experience"
            subHeader="Frontend Web Development"
          >
            Frontend web developer with knowledge in HTML5, CSS, Javascript,
            React and other frameworks/libraries.
            {'\n\n'}
            Professional office and remote experience in an agile team
            participating in daily / weekly tech meetings in english and
            portuguese.
          </InfoCard>
        </SlidingView>
        <ReturnButton />
      </Animated.View>
      <SlidingView animationDelay={30}>
        <Animated.Image
          style={styles.userBackgroundImage}
          source={require('../public/backgrounds/userBackgroundImage.jpg')}
        />
      </SlidingView>
    </EntranceScreenContainer>
  );
};
