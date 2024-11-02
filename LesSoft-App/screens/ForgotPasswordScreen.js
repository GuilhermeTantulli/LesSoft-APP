import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../Firebase.ts'; // Certifique-se de importar o auth corretamente

const logo = require('../assets/LesSoft-logo.png');

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    setErrorMessage('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
        setErrorMessage('Por favor, insira um e-mail.');
        return;
    }

    try {
        // Tenta enviar o e-mail de redefinição
        await sendPasswordResetEmail(auth, trimmedEmail);
        Alert.alert('Email enviado!', 'Verifique seu email para redefinir sua senha.');
        navigation.navigate('Login');
    } catch (error) {
        console.error('Erro ao enviar email:', error); // Log do erro para depuração

        // Personaliza a mensagem de erro
        const errorMessage = error.code === 'auth/user-not-found' 
            ? 'Nenhum usuário encontrado com esse e-mail.'
            : 'Erro ao enviar email. Tente novamente mais tarde.';
        
        setErrorMessage(errorMessage);
    }
};
  

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Esqueci Minha Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#B0B0B0"
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Enviar Email de Redefinição</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Voltar para Login</Text>
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
    fontWeight: 'bold'
  },
  linkText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;
