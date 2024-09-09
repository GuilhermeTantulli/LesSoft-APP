import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const solutions = [
  { 
    name: 'Plusoft para Recursos Humanos', 
    description: 'Capacite com a EDTech número 1 do país', 
    image: require('../assets/omni-crm-solution-icon.png') 
  },
  { 
    name: 'Plusoft para Marketing', 
    description: 'Aprimore suas estratégias e engajamento com soluções digitais inovadoras', 
    image: require('../assets/omni-crm-solution-icon.png') 
  },
  { 
    name: 'Plusoft para Financeiro', 
    description: 'Automatize e gerencie suas finanças com eficiência e precisão', 
    image: require('../assets/omni-crm-solution-icon.png') 
  },
  { 
    name: 'Plusoft para Atendimento ao Público', 
    description: 'Melhore a experiência do cliente com atendimento ágil e personalizado', 
    image: require('../assets/omni-crm-solution-icon.png') 
  },
  { 
    name: 'Plusoft para TI', 
    description: 'Transforme sua infraestrutura com tecnologias seguras e escaláveis', 
    image: require('../assets/omni-crm-solution-icon.png') 
  },
];

function SolutionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')}
          style={styles.icon}
        />
        <Text style={styles.bannerText}>Conheça nossas soluções atuais para o mercado</Text>
      </View>
      <View style={styles.carouselWrapper}>
        <Carousel
          loop
          width={screenWidth} // Ajusta a largura do carrossel para a largura da tela
          height={354}
          data={solutions}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <LinearGradient
                colors={['#444', '#666']}
                style={styles.cardGradient}
              >
                <Image source={item.image} style={styles.cardImage} />
              </LinearGradient>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            </View>
          )}
          pagingEnabled
          scrollEnabled
          itemWidth={245} // Define a largura do item do carrossel
        />
      </View>
    </View>
  );
}

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
  carouselWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 245,
    height: 354,
    backgroundColor: '#444',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F03C25', // Cor da borda laranja
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: (screenWidth - 245) / 2, // Centraliza o card horizontalmente
  },
  cardGradient: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha o conteúdo do card ao topo
    alignItems: 'flex-start', // Alinha o conteúdo do card à esquerda
    padding: 10,
  },
  cardTitle: { 
    fontSize: 18, 
    color: '#fff', 
    marginBottom: 5,
    fontWeight: 'bold', // Adiciona negrito ao título
  },
  cardDescription: { 
    fontSize: 14, 
    color: '#ddd' 
  },
});

export default SolutionsScreen;
