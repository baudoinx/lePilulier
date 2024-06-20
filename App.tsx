import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CalendrierScreen from './src/screens/CalendrierScreen';
import RappelsScreen from './src/screens/RappelsScreen';
import MedicamentsScreen from './src/screens/MedicamentsScreen';
import HistoriqueScreen from './src/screens/HistoriqueScreen';
import AddMedicationScreen from './src/screens/AddMedicationScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Calendrier" component={CalendrierScreen} />
        <Stack.Screen name="Rappels" component={RappelsScreen} />
        <Stack.Screen name="Medicaments" component={MedicamentsScreen} />
        <Stack.Screen name="Historique" component={HistoriqueScreen} />
        <Stack.Screen name="AddMedication" component={AddMedicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;