import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

/**
 * Function to render the Home Screen with navigation elements and menu toggling functionality.
 *
 * @param {object} props - The props for the Home Screen component.
 * @param {NavigationProp<any>} props.navigation - The navigation object for navigating between screens.
 * @param {RouteProp<any>} props.route - The route object for accessing route parameters.
 */
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [profileName, setProfileName] = useState('Marie');

  useEffect(() => {
    if (route.params?.name) {
      setProfileName(route.params.name);
    }
  }, [route.params?.name]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Le Pilulier</Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profileButton}>
          <Text style={styles.profileName}>{profileName}</Text>
        </TouchableOpacity>
      </View>
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Calendrier')}>
            <Text style={styles.menuText}>Calendrier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Rappels')}>
            <Text style={styles.menuText}>Rappels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Medicaments')}>
            <Text style={styles.menuText}>Médicaments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Historique')}>
            <Text style={styles.menuText}>Historique</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3B4C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  profileButton: {
    padding: 10,
  },
  profileName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  menu: {
    width: '100%',
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default HomeScreen;
