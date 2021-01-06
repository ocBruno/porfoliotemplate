import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { InfoCard } from '../components/InfoCard';
import { ListItemWithIcon } from '../components/ListItemWithIcon';
import { ReturnButton } from '../components/Buttons/ReturnButton';
import { appStyles } from '../styles';

const screenStyles = StyleSheet.create({
  entranceScreenCard: {
    flex: 1,
    backgroundColor: 'rgb(153, 67, 67)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ContactScreen: React.FunctionComponent = () => {
  return (
    <View
      // appStyles get overwridden by screenStyles in this line order
      style={{
        ...appStyles.entranceScreenCard,
        ...screenStyles.entranceScreenCard,
      }}
    >
      <InfoCard
        topbarTitle="Contact"
        header="Open to new opportunities!"
        subHeader="Get in contact:"
      >
        <View>
          <ListItemWithIcon
            href="https://www.linkedin.com/in/bruno-costa-aa15b81ab/"
            title="LinkedIn"
            iconStaticSource={require('../public/icons/linkedin.png')}
          />
          <ListItemWithIcon
            href="https://github.com/ocBruno"
            title="Github"
            iconStaticSource={require('../public/icons/github.png')}
          />
          <ListItemWithIcon
            href="mailto:brunocgmxus@gmail.com"
            title="Email"
            iconStaticSource={require('../public/icons/email.png')}
          />
        </View>
      </InfoCard>
      <ReturnButton />
    </View>
  );
};
