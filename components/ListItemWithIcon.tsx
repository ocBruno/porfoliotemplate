import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  skillContainer: {
    flex: 1,
    height: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillLogo: {
    flex: 1,
    width: 60,
    height: 20,
    resizeMode: 'contain',
  },
  skillText: {
    flex: 1,
    width: 120,
  },
});
interface ListItemWithIconProps {
  title: string;
  href?: string;
  iconStaticSource: ImageSourcePropType;
}

export const ListItemWithIcon: React.FunctionComponent<ListItemWithIconProps> = (
  props: ListItemWithIconProps
) => {
  const isItemLink = props.href === undefined ? false : true;

  function handlePressRedirect(href: string | undefined) {
    href
      ? Linking.openURL(href)
      : console.error(`ListItem href prop undefined`);
  }

  if (isItemLink === true) {
    return (
      <Pressable
        onPress={() => handlePressRedirect(props.href)}
        style={styles.skillContainer}
      >
        <TouchableOpacity style={styles.skillContainer}>
          <Text style={styles.skillText}>{props.title}</Text>
          <Image style={styles.skillLogo} source={props.iconStaticSource} />
        </TouchableOpacity>
      </Pressable>
    );
  } else {
    return (
      <View style={styles.skillContainer}>
        <Text style={styles.skillText}>{props.title}</Text>
        <Image style={styles.skillLogo} source={props.iconStaticSource} />
      </View>
    );
  }
};
