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
    bottom: 20,
    right: 20,
  },
});
export const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.returnButton}>
      <Button
        color="rgb(104, 116, 175)"
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
