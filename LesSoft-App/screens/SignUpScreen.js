import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importar o ícone
import { auth } from '../Firebase.ts';

const firestore = getFirestore();
const logo = require('../assets/LesSoft-logo.png');

const SignUpScreen = ({ navigation }) => {
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);
  
  const handleDocumentSubmit = () => {
    if (!isValidCPF(document)) {
      setErrorMessage('Documento inválido. Insira um CPF válido.');
    } else {
      setStep(2);
    }
  };

  const handleSignUp = async () => {
    setErrorMessage('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        name: name,
        email: email,
        document: document,
        createdAt: new Date(),
      });

      console.log('Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro no cadastro', error);
      setErrorMessage('Erro ao cadastrar. Tente novamente.');
    }
  };

  const isValidCPF = (cpf) => {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
    // Valida primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10 || firstDigit === 11) firstDigit = 0;
    if (firstDigit !== parseInt(cpf[9])) return false;
  
    // Valida segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10 || secondDigit === 11) secondDigit = 0;
    if (secondDigit !== parseInt(cpf[10])) return false;
  
    return true;
  };

  return (
    <View style={styles.container}>
      {step === 1 ? (
        <>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.label}>Documento</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            value={document}
            onChangeText={setDocument}
            keyboardType="numeric"
            placeholderTextColor="#B0B0B0"
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleDocumentSubmit}>
            <Text style={styles.buttonText}>Validar Documento</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Botão para voltar ao passo 1 */}
          <TouchableOpacity style={styles.backButton} onPress={() => setStep(1)}>
            <Icon name="arrow-back" size={30} color="#F03C25" />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#B0B0B0"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#B0B0B0"
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#B0B0B0"
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
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
  label: {
    color: '#FFF',
    marginBottom: 8,
    fontSize: 16,
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
  backButton: {
    position: 'absolute', // Permite o posicionamento absoluto
    top: 60, // Distância do topo da tela
    left: 16, // Distância da esquerda da tela
  },
  backButtonText: {
    color: '#F03C25',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
