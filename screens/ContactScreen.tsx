import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InfoCard } from '../components/InfoCard';
import { RootStackParamList } from '../App';
import { ListItemWithIcon } from '../components/ListItemWithIcon';
import { ReturnButton } from '../components/Buttons/ReturnButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type ContactScreenRouteProp = RouteProp<RootStackParamList, 'Contact'>;

type ContactScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contact'
>;

type ContactScreenProps = {
  navigation: ContactScreenNavigationProp;
  route: ContactScreenRouteProp;
};

export const ContactScreen: React.FunctionComponent<ContactScreenProps> = ({
  route,
  navigation,
}: ContactScreenProps) => {
  return (
    <View style={styles.container}>
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
