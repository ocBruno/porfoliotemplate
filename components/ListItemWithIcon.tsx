import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";

const styles = StyleSheet.create({
  skillContainer: {
    flex: 1,
    height: 33,
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
interface ListItemWithIconProps {
  title: string;
  iconStaticSource: ImageSourcePropType;
}

export const ListItemWithIcon: React.FunctionComponent<ListItemWithIconProps> = (
  props: ListItemWithIconProps
) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>{props.title}</Text>
      <Image style={styles.skillLogo} source={props.iconStaticSource} />
    </View>
  );
};
