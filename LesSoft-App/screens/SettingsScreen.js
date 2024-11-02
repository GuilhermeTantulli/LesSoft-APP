import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o @expo/vector-icons instalado
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      console.log('Logout bem-sucedido, voltando para tela de Login...');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Navega para a tela de login após o logout
      });
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <View style={styles.container}>
      {/* Tarja no topo */}
      <View style={styles.banner}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')}
          style={styles.icon}
        />
        <Text style={styles.bannerText}>Configurações</Text>
      </View>

      {/* Lista de botões */}
      <View style={styles.buttonList}>
        <TouchableOpacity 
          style={styles.option}
          onPress={() => showAlert('Versão', '1.0.0')}
        >
          <Text style={styles.optionText}>Versão</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => showAlert('Política de Privacidade', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
        >
          <Text style={styles.optionText}>Política de Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => showAlert('Relatar Problema', 'Função não-implementada.')}
        >
          <Text style={styles.optionText}>Relatar Problema</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => showAlert('Central de Ajuda', 'Função não-implementada.')}
        >
          <Text style={styles.optionText}>Central de Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => navigation.navigate('ChangePassword')}
        >
          <Text style={styles.optionText}>Redefinir Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionExcluir}
          onPress={() => navigation.navigate('DeleteAccount')}
        >
          <Text style={styles.optionText}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de logout */}
      <View style={styles.logoutContainer}>
        <Ionicons
          name="power-outline"
          size={30}
          color="#F03C25"
          style={styles.logoutIcon}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  banner: {
    width: '100%',
    backgroundColor: '#222227', // Cor da tarja
    alignItems: 'center',
    paddingVertical: 20, // Ajusta a altura da tarja
    marginTop: 30,
    marginBottom: 120, // Espaço abaixo da tarja
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    width: 14,
    height: 13,
  },
  buttonList: {
    marginBottom: 100, // Espaço para o botão de logout
    marginHorizontal: 20, // Margem lateral para centralizar os botões
  },
  option: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionExcluir: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: {
    marginTop: -100,
  },
});

export default SettingsScreen;
