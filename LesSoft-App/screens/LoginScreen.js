import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const logo = require('../assets/LesSoft-logo.png');

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (user === 'teste' && password === 'teste123') {
      try {
        const token = 'mockedAuthToken';
        await AsyncStorage.setItem('authToken', token);

        console.log('Login bem-sucedido, navegando para tela Home...');

        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }], // Certifique-se de que 'Main' corresponde ao nome da tela principal no StackNavigator
        });
      } catch (error) {
        console.error('Erro ao salvar o token', error);
        setErrorMessage('Erro ao realizar login. Tente novamente.');
      }
    } else {
      setErrorMessage('Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#B0B0B0"
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    marginBottom: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    color: '#000000',
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginScreen;
