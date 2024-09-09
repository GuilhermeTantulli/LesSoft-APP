import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* Imagem no topo */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')} // Caminho para o seu arquivo
          style={styles.icon}
        />
      </View>
      
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
