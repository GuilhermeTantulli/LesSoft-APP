// screens/LoginScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Atualize o caminho da imagem de acordo com sua estrutura de pastas
const logo = require('../assets/LesSoft-logo.png');

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (!user && !password) {
      setErrorMessage('Credenciais vazias');
      return;
    }
    
    if (!user) {
      setErrorMessage('Usuário inválido');
      return;
    }

    if (!password) {
      setErrorMessage('Senha inválida');
      return;
    }

    try {
      const response = await axios.post('https://your-api-endpoint.com/login', { user, password });
      const { token } = response.data;

      if (!token) {
        setErrorMessage('Usuário incorreto');
        return;
      }

      await AsyncStorage.setItem('authToken', token);

      navigation.reset({
        index: 0,
        routes: [{ name: 'App' }],
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrorMessage('Usuário não encontrado');
        } else if (error.response.status === 401) {
          setErrorMessage('Senha incorreta');
        } else {
          setErrorMessage('Erro ao fazer login');
        }
      } else {
        setErrorMessage('Erro ao conectar com o servidor');
      }
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
    backgroundColor: '#41414A', // Fundo da tela
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100, // Ajuste o tamanho do logo conforme necessário
    height: 110,
    alignSelf: 'center',
    marginBottom: 100, // Espaço entre o logo e os campos de entrada
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF', // Cor dos campos de entrada
    color: '#000000', // Cor do texto dentro dos campos
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F03C25', // Cor do botão
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 16,
  },
});

export default LoginScreen;
