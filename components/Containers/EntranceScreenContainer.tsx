import React, { useEffect, ReactNode, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  entranceScreenContainer: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    height: '100%',
  },
});
interface EntranceScreenContainerProps {
  children: ReactNode;
}

export const EntranceScreenContainer: React.FunctionComponent<EntranceScreenContainerProps> = (
  props: EntranceScreenContainerProps
) => {
  const slideInFromLeftAnimation = useRef(new Animated.Value(100)).current; // Initial value for right: 100

  useEffect(() => {
    Animated.timing(slideInFromLeftAnimation, {
      toValue: 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  }, [slideInFromLeftAnimation]);

  return (
    <Animated.View
      style={{
        ...styles.entranceScreenContainer,
        right: slideInFromLeftAnimation,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
