import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Crear un nuevo tab
export default function NewTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.newTabText}>Este es un nuevo tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  newTabText: {
    fontSize: 20,
    color: '#00796b',
    fontWeight: 'bold',
  },
});