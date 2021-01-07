import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { InfoCard } from '../components/Cards/InfoCard';
import { ListItemWithIcon } from '../components/Utils/ListItemWithIcon';
import { ReturnButton } from '../components/Buttons/ReturnButton';
import { EntranceScreenContainer } from '../components/Containers/EntranceScreenContainer';
import FormCard from '../components/Cards/FormCard';

const styles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(22, 44, 87)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
  },
  formCardStyle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export const ContactScreen: React.FunctionComponent = () => {
  return (
    <EntranceScreenContainer>
      <View style={styles.entranceScreenContainer}>
        <FormCard
          style={styles.formCardStyle}
          formHeader="Email"
          formDescription="Send me an email"
          singleLineInputPlaceholder="Subject"
          multiLineInputPlaceholder="Body"
          submitButtonTitle="Send"
        />
        <InfoCard
          topbarTitle="Contact"
          header="Open to new opportunities!"
          subHeader="Get in contact:"
        >
          <View>
            <ListItemWithIcon
              title="LinkedIn"
              href="https://www.linkedin.com/in/bruno-costa-aa15b81ab/"
              iconStaticSource={require('../public/icons/linkedin.png')}
            />
            <ListItemWithIcon
              title="Github"
              href="https://github.com/ocBruno"
              iconStaticSource={require('../public/icons/github.png')}
            />
            <ListItemWithIcon
              title="Email"
              href="mailto:brunocgmxus@gmail.com"
              iconStaticSource={require('../public/icons/email.png')}
            />
          </View>
        </InfoCard>
        <ReturnButton />
      </View>
    </EntranceScreenContainer>
  );
};
