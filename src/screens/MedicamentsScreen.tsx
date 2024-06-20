import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const MedicamentsScreen: React.FC<Props> = ({ navigation, route }) => {
  const [medications, setMedications] = useState<{ name: string; form: string; stock: string; doses: { time: string; quantity: string }[] }[]>([]);

  useEffect(() => {
    if (route.params?.newMedication) {
      setMedications([...medications, route.params.newMedication]);
    }
  }, [route.params?.newMedication]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Médicaments</Text>
      {medications.map((medication, index) => (
        <View key={index} style={styles.medicationCard}>
          <Text style={styles.medicationName}>{medication.name} {medication.form}</Text>
          <Text style={styles.medicationInfo}>En stock : {medication.stock} {medication.form}</Text>
          <Text style={styles.medicationInfo}>Prochaine prise : {medication.doses[0]?.time}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('AddMedication')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter un médicament</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3B4C',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  medicationCard: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medicationInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default MedicamentsScreen;
