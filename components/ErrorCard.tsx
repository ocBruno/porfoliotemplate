import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, ReactNode, useRef } from 'react';
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: 240,
    right: 100,
    position: 'relative',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(224, 16, 16)',
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid',
    borderColor: 'rgb(255, 149, 149)',
    shadowColor: 'rgb(255, 168, 168)',
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
interface ErrorCardProps {
  topbarTitle: string;
  header: string;
  subHeader: string;
  children: ReactNode;
}

export const ErrorCard: React.FunctionComponent<ErrorCardProps> = (
  props: ErrorCardProps
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
        ...styles.container,
        right: fadeInFromRightAnimation, // Bind opacity to animated value
      }}
    >
      <Text style={styles.topbarTitle}>{props.topbarTitle}</Text>
      <Text style={styles.header}>{props.header}</Text>
      <Text style={styles.subHeader}>{props.subHeader}</Text>
      <Text style={styles.content}>{props.children}</Text>
    </Animated.View>
  );
};
