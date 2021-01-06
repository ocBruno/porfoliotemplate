import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, ReactNode, useRef } from 'react';
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: 240,
    right: `20%`,
    top: `20%`,
    position: 'absolute',
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
interface ErrorBoundaryCardProps {}

export class ErrorBoundaryCard extends React.Component<
  {},
  { error: any; errorInfo: any }
> {
  constructor(props: ErrorBoundaryCardProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // TODO: log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo !== null) {
      return (
        <Animated.View
          style={{
            ...styles.container,
          }}
        >
          <Text style={styles.topbarTitle}>Oops</Text>
          <Text style={styles.header}>Something went wrong</Text>
          <Text style={styles.subHeader}>
            Try again or get in contact if the problem persists
          </Text>
        </Animated.View>
      );
    } else {
      return this.props.children;
    }
  }
}
