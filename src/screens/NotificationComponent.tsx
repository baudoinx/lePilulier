import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const NotificationComponent: React.FC = () => {
  const [rejectionCount, setRejectionCount] = useState(0);
  const [medication, setMedication] = useState({ name: 'Doliprane 500mg', quantity: '1 comprimé' });

  useEffect(() => {
    if (rejectionCount >= 2) {
      // Simulate sending an emergency message
      Alert.alert('Emergency', 'Sending an emergency message to the contact.');
      setRejectionCount(0);
    }
  }, [rejectionCount]);

  const handleAccept = () => {
    Alert.alert('Taken', 'Medication taken successfully.');
  };

  const handleReject = () => {
    setRejectionCount(rejectionCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Médicament à prendre</Text>
      <View style={styles.medicationCard}>
        <Text style={styles.medicationName}>{medication.name}</Text>
        <Text style={styles.medicationInfo}>{medication.quantity}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleReject} style={styles.rejectButton}>
          <Text style={styles.buttonText}>Pas Maintenant</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAccept} style={styles.acceptButton}>
          <Text style={styles.buttonText}>Maintenant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  medicationCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicationInfo: {
    fontSize: 14,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rejectButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  acceptButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default NotificationComponent;
