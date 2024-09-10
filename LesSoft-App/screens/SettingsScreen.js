import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o @expo/vector-icons instalado

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
      <Ionicons
        name="power-outline" // Ícone de logout
        size={30}
        color="#F03C25" // Cor vermelha #F03C25
        style={styles.logoutIcon} // Estilo para posicionamento
        onPress={handleLogout} // Chama a função de logout ao clicar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  logoutIcon: {
    position: 'absolute',
    top: 30,
    right: 20, // Posicionado no canto superior direito
  },
});

export default SettingsScreen;
