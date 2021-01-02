import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StyleSheet, View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfoCard } from "../components/InfoCard";
import { RootStackParamList } from "../App";
import { ListItemWithIcon } from "../components/ListItemWithIcon";

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

type ContactScreenRouteProp = RouteProp<RootStackParamList, "Contact">;

type ContactScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Contact"
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
            title="LinkedIn"
            iconStaticSource={require("../public/icons/linkedin.png")}
          />
          <ListItemWithIcon
            title="Email"
            iconStaticSource={require("../public/icons/email.png")}
          />
        </View>
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
