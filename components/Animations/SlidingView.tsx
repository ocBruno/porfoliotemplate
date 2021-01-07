import React, { useEffect, useRef } from 'react';
import { StyleSheet, Easing, Animated } from 'react-native';

const styles = StyleSheet.create({
  slidingView: {
    position: 'relative',
    zIndex: 0,
  },
});

interface SlidingViewProps {
  children?: React.ReactNode;
  animationDelay: number;
}

export const SlidingView: React.FunctionComponent<SlidingViewProps> = (
  props: SlidingViewProps
) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      useNativeDriver: false,
      delay: props.animationDelay,
      duration: 600,
      easing: Easing.sin,
    }).start();
  }, [animationValue]);

  const translateXFromLeft = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-600, 0],
  });

  return (
    <Animated.View
      style={{
        ...styles.slidingView,
        transform: [
          {
            translateX: translateXFromLeft,
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};
