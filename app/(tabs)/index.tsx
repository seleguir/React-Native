import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Crear un hola mundo
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },
});