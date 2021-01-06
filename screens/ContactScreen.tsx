import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { InfoCard } from '../components/Cards/InfoCard';
import { ListItemWithIcon } from '../components/Utils/ListItemWithIcon';
import { ReturnButton } from '../components/Buttons/ReturnButton';
import { EntranceScreen } from '../components/Screens/EntranceScreen';

const screenStyles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(58, 94, 161)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ContactScreen: React.FunctionComponent = () => {
  return (
    <EntranceScreen>
      <View style={screenStyles.entranceScreenContainer}>
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
    </EntranceScreen>
  );
};
