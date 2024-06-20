import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type Props = {
  navigation: NavigationProp<any>;
};

const AddMedicationScreen: React.FC<Props> = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [form, setForm] = useState('Comprimé');
  const [stock, setStock] = useState('');
  const [doses, setDoses] = useState<{ time: string; quantity: string }[]>([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDoseIndex, setSelectedDoseIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const addDose = () => {
    setDoses([...doses, { time: '', quantity: '' }]);
  };

  const removeDose = (index: number) => {
    const newDoses = doses.filter((_, i) => i !== index);
    setDoses(newDoses);
  };

  const showDatePicker = (index: number) => {
    setSelectedDoseIndex(index);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      const newDoses = [...doses];
      newDoses[selectedDoseIndex].time = formattedTime;
      setDoses(newDoses);
    }
    hideDatePicker();
  };

  const saveMedication = () => {
    if (medicationName.trim() === '') {
      Alert.alert('Error', 'Please enter a medication name.');
      return;
    }
    if (stock.trim() === '') {
      Alert.alert('Error', 'Please enter the stock.');
      return;
    }
    if (doses.length === 0) {
      Alert.alert('Error', 'Please add at least one dose.');
      return;
    }
    const newMedication = {
      name: medicationName,
      form,
      stock,
      doses,
    };
    navigation.navigate('Medicaments', { newMedication });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Ajouter un Médicament</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom du médicament :</Text>
        <TextInput
          style={styles.input}
          value={medicationName}
          onChangeText={setMedicationName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sous quelle forme :</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form}
            onValueChange={(itemValue) => setForm(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Comprimé" value="Comprimé" />
            <Picker.Item label="Capsule" value="Capsule" />
            <Picker.Item label="Sirop" value="Sirop" />
          </Picker>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>En stock :</Text>
        <TextInput
          style={styles.input}
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />
      </View>
      {doses.map((dose, index) => (
        <View key={index} style={styles.doseContainer}>
          <Text style={styles.label}>Prise {index + 1}</Text>
          <TouchableOpacity onPress={() => showDatePicker(index)} style={styles.input}>
            <Text>{dose.time || 'Sélectionner l\'heure'}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={dose.quantity}
            onChangeText={(text) => {
              const newDoses = [...doses];
              newDoses[index].quantity = text;
              setDoses(newDoses);
            }}
            placeholder="Quantité"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={() => removeDose(index)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addDose} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter une nouvelle prise</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={saveMedication} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>
      {isDatePickerVisible && (
        <DateTimePicker
          value={currentDate}
          mode="time"
          display="default"
          onChange={handleConfirm}
        />
      )}
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
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
    color: '#000000',
  },
  pickerContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  doseContainer: {
    marginBottom: 15,
  },
  removeButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#228B22',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AddMedicationScreen;
