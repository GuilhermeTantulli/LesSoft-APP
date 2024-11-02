import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { auth } from '../Firebase'; // Certifique-se de importar o auth corretamente

const logo = require('../assets/LesSoft-logo.png');

const AccountDeleteScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteAccount = async () => {
    setErrorMessage('');

    try {
      const user = auth.currentUser;
      if (user) {
        await user.delete(); // Método para deletar a conta do usuário
        Alert.alert('Conta deletada', 'Sua conta foi deletada com sucesso.');
        navigation.navigate('Login'); // Navega de volta para a tela de login após deletar a conta
      }
    } catch (error) {
      console.error('Erro ao deletar conta', error);
      setErrorMessage('Erro ao deletar a conta. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Deletar Conta</Text>
      <Text style={styles.warningText}>
        Atenção: essa ação não pode ser desfeita. Você realmente deseja deletar sua conta?
      </Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Deletar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.linkText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 110,
    alignSelf: 'center',
    marginBottom: 50,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  warningText: {
    color: '#FFCC00',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F03C25',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AccountDeleteScreen;
