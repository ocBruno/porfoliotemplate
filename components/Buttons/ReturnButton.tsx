import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.returnButton}>
      <Button
        color="rgb(70, 133, 236)"
        title="Go back"
        onPress={() => navigation.goBack()}
        accessibilityLabel="Return to the previous page"
      />
    </View>
  );
};
