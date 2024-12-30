import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AccountScreen() {
  const handlePress = (option:string) => {
    console.log(`${option} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hai, Shajadh</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity style={styles.option} onPress={() => handlePress('Profile')}>
          <MaterialIcons name="person" size={24} color="#ffffff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Profile</Text>
            <Text style={styles.optionText2}>Update your personal and contact details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('Security and Settings')}>
          <MaterialIcons name="security" size={24} color="#ffffff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Security and Settings</Text>
            <Text style={styles.optionText2}>Update your email or password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('Legal')}>
          <MaterialIcons name="gavel" size={24} color="#ffffff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Legal</Text>
            <Text style={styles.optionText2}>See terms, policies and privacy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('Help and Feedback')}>
          <MaterialIcons name="help" size={24} color="#ffffff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Help and Feedback</Text>
            <Text style={styles.optionText2}>Get Customer Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('Sign Out')}>
          <Text style={styles.signOutText}>SignOut</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}> 
        <Text style={styles.footerText}>© Copyright 2024 BookMyRoom.com LP</Text>
        <Text style={styles.footerText}>All Rights Reserved</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#79b652',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  optionText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  optionText2: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginTop: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#79b652',
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  signOutText: {
    fontSize: 16,
    color: '#79b652',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',  
    justifyContent: 'center',  
  },
  footerText: {
    fontSize: 14,
    color: '#79b652', 
    textAlign: 'center',
    fontWeight:600
  },
});
