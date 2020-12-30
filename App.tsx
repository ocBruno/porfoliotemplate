import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.userFullNameHeader}>Bruno Costa</Text>
      <Text style={styles.userBiography}>Frontend Web/Mobile Developer</Text>
      <Text style={styles.userQualifications}>Html5, CSS3, Javascript, React</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userFullNameHeader: {
    color: '#0f0404',
    fontSize: 24
  },
  userBiography: {
    color: '#0f0404',
    fontSize: 12
  },
  userQualifications: {
    color: '#0f0404',
    fontSize: 9
  }
});
