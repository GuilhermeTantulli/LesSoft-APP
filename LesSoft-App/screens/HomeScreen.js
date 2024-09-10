import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const carouselItems = [
  { title: 'Serviço' },
  { title: 'Varejo' },
  { title: 'Telecom' },
  { title: 'Bens de Consumo' },
  { title: 'Serviço Financeiro' },
  { title: 'Seguro' },
  { title: 'Utilities' },
  { title: 'Agronegócio' },
  { title: 'Educação' },
  { title: 'Saúde' },
];

const HomeScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.title}</Text>
    </View>
  );  

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')}
          style={styles.icon}
        />
        <Text style={styles.bannerText}>Alguns números da Plusoft</Text>
      </View>
      <View style={styles.carouselWrapper}>
        {/* Carrossel */}
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselTitle}>Temos um time de especialistas que domina o seu negócio</Text>
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000}
            width={windowWidth - 32} // Adiciona margem de 16 de cada lado
            height={200}
            data={carouselItems}
            renderItem={renderCarouselItem}
            scrollAnimationDuration={1000}
            pagingEnabled
            customConfig={{
              itemSpacing: 20, // Espaço entre os itens do carrossel
            }}
          />
        </View>

        {/* Números importantes */}
        <View style={styles.statsBanner}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>+240</Text>
            <Text style={styles.statText}>Clientes espalhados por mais de 20 estados e municípios do país</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>+140 milhões</Text>
            <Text style={styles.statText}>De interações com chatbots</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>+320 milhões</Text>
            <Text style={styles.statText}>de atendimentos registrados na nossa plataforma de CRM/ano</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>+80</Text>
            <Text style={styles.statText}>Prêmios a empresa mais premiada do Brasil</Text>
          </View>
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
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    width: 14,
    height: 13,
  },
  carouselContainer: {
    marginBottom: 120,  // Espaçamento adicional para evitar sobreposição
    alignItems: 'center',
  },
  carouselTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Adiciona espaço horizontal entre os itens do carrossel
  },
  carouselItemText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  statsBanner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 16, // Alinha os números com a margem do carrossel
  },
  stat: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    color: '#F03C25',
    fontWeight: 'bold',
  },
  statText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
