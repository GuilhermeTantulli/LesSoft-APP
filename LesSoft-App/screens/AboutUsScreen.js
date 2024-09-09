import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Imagem no topo */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')} // Caminho para o seu arquivo
          style={styles.icon}
        />
      </View>
      
      {/* Banners de introdução */}
      <View style={styles.bannerWrapper}>
        <Text style={styles.plusoftBannerTitle}>Sobre a Plusoft</Text>
        <View style={styles.plusoftBannersContainer}>
          <Text style={styles.bannerText}>
            Nossas soluções em tecnologia focam em melhorar a experiência dos clientes e otimizar processos empresariais.
          </Text>
        </View>
      </View>

      {/* Segundo Banner */}
      <View style={styles.bannerWrapper}>
        <Text style={styles.lessoftBannerTitle}>O que é a LesSoft?</Text>
        <View style={styles.lessoftBannersContainer}>
          <Text style={styles.bannerText}>
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
    backgroundColor: '#333',
    padding: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    width: 14,  // Ajuste conforme o tamanho da imagem
    height: 13, // Ajuste conforme o tamanho da imagem
    marginTop: 20,
  },
  bannerWrapper: {
    marginBottom: 20,  // Espaçamento inferior aumentado
  },
  plusoftBannerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  plusoftBannersContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  lessoftBannerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',

    marginBottom: 10,
  },
  lessoftBannersContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  bannerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default AboutUsScreen;
