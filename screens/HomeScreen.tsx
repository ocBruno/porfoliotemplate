import { RouteProp } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  PanResponder,
  Button,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfoCard } from "../components/InfoCard";
import { RootStackParamList } from "../App";
import { ListItemWithImage } from "../components/ListItemWithImage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248, 248, 250)",
    alignItems: "center",
    justifyContent: "center",
  },
});

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  route,
  navigation,
}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <InfoCard
        topbarTitle="Skills"
        header="Bruno Costa"
        subHeader="Frontend Web/Mobile Developer."
      >
        <View>
          <ListItemWithImage
            title="HTML"
            image={require("../public/icons/html.png")}
          />
          <ListItemWithImage
            title="CSS"
            image={require("../public/icons/css.png")}
          />
          <ListItemWithImage
            title="Javascript"
            image={require("../public/icons/js.png")}
          />
          <ListItemWithImage
            title="React"
            image={require("../public/icons/react.png")}
          />
        </View>
      </InfoCard>

      <Button
        title="More about me"
        onPress={() => navigation.navigate("Profile", { title: "Jane" })}
      />
    </View>
  );
};
