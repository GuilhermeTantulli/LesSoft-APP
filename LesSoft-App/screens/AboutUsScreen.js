import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Tarja no topo igual à HomeScreen */}
      <View style={styles.banner}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')}
          style={styles.icon}
        />
        <Text style={styles.bannerText}>Quem Somos?</Text>
      </View>

      {/* Banners de introdução */}
      <View style={styles.bannerWrapper}>
        <Text style={styles.plusoftBannerTitle}>Sobre a Plusoft</Text>
        <View style={styles.plusoftBannersContainer}>
          <Text style={styles.bannerTextContent}>
            Nossas soluções em tecnologia focam em melhorar a experiência dos clientes e otimizar processos empresariais.
          </Text>
        </View>
      </View>

      {/* Segundo Banner */}
      <View style={styles.bannerWrapper}>
        <Text style={styles.lessoftBannerTitle}>O que é a LesSoft?</Text>
        <View style={styles.lessoftBannersContainer}>
          <Text style={styles.bannerTextContent}>
            A LesSoft é a nossa mais recente oferta, projetada para fornecer ferramentas avançadas para gestão de dados e automação.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#333' 
  },
  banner: {
    width: '100%',
    backgroundColor: '#222227', // Cor da tarja
    alignItems: 'center',
    paddingVertical: 20, // Ajusta a altura da tarja
    marginTop: 30,
    marginBottom: 150, // Espaço abaixo da tarja
  },
  bannerText: {
    color: '#fff',
    fontSize: 22, // Tamanho igual ao da HomeScreen
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    width: 14,
    height: 13,
  },
  plusoftBannerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  plusoftBannersContainer: {
    width: '86%', // Largura ajustada semelhante aos números importantes
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center', // Centraliza o banner
  },
  lessoftBannerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  lessoftBannersContainer: {
    width: '86%', // Largura ajustada semelhante aos números importantes
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'center', // Centraliza o banner
  },
  bannerTextContent: {
    fontSize: 16, // Tamanho do texto nas descrições dos banners
    color: '#333',
    textAlign: 'center',
  },
});


export default AboutUsScreen;
