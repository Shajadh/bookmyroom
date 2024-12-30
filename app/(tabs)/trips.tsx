import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trips Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
