import React, { ReactNode, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
interface CardStackProps {
  children: ReactNode;
}

export const CardStack: React.FunctionComponent<CardStackProps> = (
  props: CardStackProps
) => {
  const [CardStacksStack, setCardStacksStack] = useState([]);

  function popCardFromStack() {
    setCardStacksStack((currentStack) => {
      let poppedStack = currentStack;
      poppedStack.pop();
      return poppedStack;
    });
  }
  return <View style={styles.container}></View>;
};
