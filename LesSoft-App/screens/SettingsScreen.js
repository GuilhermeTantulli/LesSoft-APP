// screens/SettingsScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      console.log('Logout bem-sucedido, navegando para Login');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Navega para a tela de login após o logout
      });
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
