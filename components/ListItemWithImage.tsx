import React, { ReactNode, useRef } from "react";
import {
  Animated,
  StyleSheet,
  StyleSheetProperties,
  Text,
  Image,
  View,
  PanResponder,
  ImageSourcePropType,
} from "react-native";

const styles = StyleSheet.create({
  skillContainer: {
    flex: 1,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillLogo: {
    flex: 1,
    width: 60,
    height: 20,
    resizeMode: "contain",
  },
  skillText: {
    flex: 1,
    width: 120,
  },
});
interface ListItemWithImageProps {
  title: string;
  image: ImageSourcePropType;
}

export const ListItemWithImage: React.FunctionComponent<ListItemWithImageProps> = (
  props: ListItemWithImageProps
) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>{props.title}</Text>
      <Image style={styles.skillLogo} source={props.image} />
    </View>
  );
};
