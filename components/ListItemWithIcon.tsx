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
import { handlePressRedirect } from '../helpers/routing';

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
  if (isItemLink === true) {
    return (
      <TouchableOpacity
        onPress={() => handlePressRedirect(props.href)}
        style={styles.skillContainer}
      >
        <Text style={styles.skillText}>{props.title}</Text>
        <Image style={styles.skillLogo} source={props.iconStaticSource} />
      </TouchableOpacity>
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
