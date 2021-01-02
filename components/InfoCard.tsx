import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxWidth: 240,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "rgb(255, 255, 255)",
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: "solid",
    borderColor: "rgb(149, 200, 255)",
    shadowColor: "rgb(168, 210, 255)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topbarTitle: {
    marginBottom: 20,
    fontSize: 10,
    color: "#141212",
  },
  header: {
    marginBottom: 20,
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f0404",
  },
  subHeader: {
    marginBottom: 24,
    fontSize: 12,
    color: "#0f0404",
  },
  content: {
    fontSize: 12,
    color: "#0f0404",
  },
});
interface InfoCardProps {
  topbarTitle: string;
  header: string;
  subHeader: string;
  children: ReactNode;
}

export const InfoCard: React.FunctionComponent<InfoCardProps> = (
  props: InfoCardProps
) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topbarTitle}>{props.topbarTitle}</Text>
      <Text style={styles.header}>{props.header}</Text>
      <Text style={styles.subHeader}>{props.subHeader}</Text>
      <Text style={styles.content}>{props.children}</Text>
    </View>
  );
};
