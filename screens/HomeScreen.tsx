import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet, View, Button, Pressable, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InfoCard } from '../components/InfoCard';
import { RootStackParamList } from '../App';
import { ListItemWithIcon } from '../components/ListItemWithIcon';
import { appStyles } from '../styles';

const screenStyles = StyleSheet.create({
  entranceScreenCard: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: `100%`,
    height: `100%`,
  },
  moreAboutMeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  getInContactButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
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
    <View
      // appStyles get overwridden by screenStyles in this line order
      style={{
        ...appStyles.entranceScreenCard,
        ...screenStyles.entranceScreenCard,
      }}
    >
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
      <View style={screenStyles.moreAboutMeButton}>
        <Button
          color="rgb(157, 175, 224)"
          title="More about me"
          onPress={() => navigation.navigate('Profile', {})}
        />
      </View>
      <View style={screenStyles.getInContactButton}>
        <Button
          color="rgb(104, 116, 175)"
          title="Get in contact"
          onPress={() => navigation.navigate('Contact', {})}
        />
      </View>
    </View>
  );
};
