import React, { useEffect, ReactNode, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: 240,
    right: 100,
    position: 'relative',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid',
    borderColor: 'rgb(149, 200, 255)',
    shadowColor: 'rgb(168, 210, 255)',
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
    color: '#141212',
  },
  header: {
    marginBottom: 20,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0f0404',
  },
  subHeader: {
    marginBottom: 24,
    fontSize: 12,
    color: '#0f0404',
  },
  content: {
    fontSize: 12,
    color: '#0f0404',
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
        ...styles.container,
        right: slideInFromLeftAnimation,
      }}
    >
      <Text style={styles.topbarTitle}>{props.topbarTitle}</Text>
      <Text style={styles.header}>{props.header}</Text>
      <Text style={styles.subHeader}>{props.subHeader}</Text>
      <Text style={styles.content}>{props.children}</Text>
    </Animated.View>
  );
};
