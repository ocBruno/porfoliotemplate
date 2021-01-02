import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248, 248, 250)",
    alignItems: "center",
    justifyContent: "center",
  },
  returnButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({
  route,
  navigation,
}: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <InfoCard
        topbarTitle="About Me"
        header="Experience"
        subHeader="Frontend Web Development"
      >
        Frontend web developer with knowledge in HTML5, CSS, Javascript, React
        and other frameworks/libraries. Professional office and remote
        experience in an agile team participating in daily / weekly tech
        meetings in english and portuguese.
      </InfoCard>
      <View style={styles.returnButton}>
        <Button
          color="rgb(104, 116, 175)"
          title="Go back"
          onPress={() => navigation.navigate("Home", {})}
        />
      </View>
    </View>
  );
};
