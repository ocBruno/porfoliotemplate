import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Easing,
  Text,
  ImageSourcePropType,
  Animated,
} from 'react-native';
import { handlePressRedirect } from '../../helpers/routing';

const styles = StyleSheet.create({
  slidingText: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 9,
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: 'relative',
    width: 200,
  },
});
interface SlidingTextProps {
  children: React.ReactNode | null;
  animationDelay: number;
}

export const SlidingText: React.FunctionComponent<SlidingTextProps> = (
  props: SlidingTextProps
) => {
  const slideInFromLeftAnimation = useRef(new Animated.Value(-600)).current;

  useEffect(() => {
    Animated.timing(slideInFromLeftAnimation, {
      toValue: 0,
      useNativeDriver: false,
      delay: props.animationDelay,
      duration: 600,
      easing: Easing.sin,
    }).start();
  }, [slideInFromLeftAnimation]);

  return (
    <Animated.View
      style={{
        ...styles.slidingText,
        transform: [{ translateX: slideInFromLeftAnimation }],
      }}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </Animated.View>
  );
};
