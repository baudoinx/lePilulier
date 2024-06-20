import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const RappelsScreen: React.FC<Props> = ({ navigation }) => {
  const [remaining, setRemaining] = useState('5');
  const [notification, setNotification] = useState('Médicament à prendre');
  const [reminderAfter, setReminderAfter] = useState('15');
  const [emergencyAfter, setEmergencyAfter] = useState('2');

  const saveSettings = () => {
    Alert.alert('Success', 'Settings saved successfully!');
    // Save the settings locally or send them to the server here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Rappels</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Recevoir les rappels suivants :</Text>
        <View style={styles.row}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={remaining}
              onValueChange={(itemValue) => setRemaining(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          <Text style={styles.labelInline}>Quand il rest</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Notification</Text>
        <TextInput
          style={styles.input}
          value={notification}
          onChangeText={setNotification}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.labelInline}>Rappel après</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={reminderAfter}
              onValueChange={(itemValue) => setReminderAfter(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="5" value="5" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
            </Picker>
          </View>
          <Text style={styles.labelInline}>minutes</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Envoyer un message d'urgence après</Text>
        <View style={styles.row}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={emergencyAfter}
              onValueChange={(itemValue) => setEmergencyAfter(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          <Text style={styles.labelInline}>Rappels</Text>
        </View>
      </View>

      <TouchableOpacity onPress={saveSettings} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
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
  inputContainer: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  labelInline: {
    fontSize: 16,
    color: '#000000',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 10,
  },
  picker: {
    height: 40,
    width: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default RappelsScreen;
