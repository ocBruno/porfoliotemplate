import React, { useEffect, ReactNode, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { themeCardStyles } from './Cards.styles';

const styles = StyleSheet.create({
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
        ...themeCardStyles.themeCardContainer,
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
