import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth, updatePassword } from '../Firebase';

const logo = require('../assets/LesSoft-logo.png');

const ChangePasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = async () => {
    setErrorMessage('');

    if (!newPassword || !confirmPassword) {
      setErrorMessage('Por favor, insira a nova senha e confirme-a.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('As senhas não coincidem. Tente novamente.');
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        // Atualiza a senha do usuário autenticado
        await updatePassword(user, newPassword);
        Alert.alert('Sucesso!', 'Sua senha foi alterada com sucesso.');
        navigation.navigate('Configurações');
      } else {
        setErrorMessage('Usuário não autenticado. Faça login novamente.');
      }
    } catch (error) {
      console.error('Erro ao trocar a senha', error);
      setErrorMessage('Erro ao trocar a senha. Tente novamente.');
    }
  };
  
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Trocar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha"
          value={newPassword}
          onChangeText={setNewPassword}
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua nova senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')}>
          <Text style={styles.linkText}>Voltar para Configurações</Text>
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
  input: {
    height: 50,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
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

export default ChangePasswordScreen;
