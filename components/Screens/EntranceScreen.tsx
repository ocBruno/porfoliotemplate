import { StyleSheet, Animated } from 'react-native';
import React, { useEffect, ReactNode, useRef } from 'react';

const styles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    height: '100%',
  },
});
interface EntranceScreenProps {
  children: ReactNode;
}

export const EntranceScreen: React.FunctionComponent<EntranceScreenProps> = (
  props: EntranceScreenProps
) => {
  const fadeInFromRightAnimation = useRef(new Animated.Value(100)).current; // Initial value for right: 100

  useEffect(() => {
    Animated.timing(fadeInFromRightAnimation, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  }, [fadeInFromRightAnimation]);

  return (
    <Animated.View
      style={{
        ...styles.entranceScreenContainer,
        right: fadeInFromRightAnimation,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
