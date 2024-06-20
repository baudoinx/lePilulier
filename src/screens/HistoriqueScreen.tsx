import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoriqueScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Historique Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A3B4C',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default HistoriqueScreen;
