import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const products = [
  { name: 'Omni CRM', color1: '#221C50', color2: '#4D40B6', image: require('../assets/omni-crm-icon.png'), description: 'Descrição do Omni CRM', iconWidth: 80, iconHeight: 65 },
  { name: 'Hike', color1: '#F0AF13', color2: '#D1B20D', image: require('../assets/hike-icon.png'), description: 'Descrição do Hike', iconWidth: 80, iconHeight: 71 },
  { name: 'Geo', color1: '#EF4123', color2: '#BC2D0E', image: require('../assets/geo-icon.png'), description: 'Descrição do Geo', iconWidth: 80, iconHeight: 78 },
  { name: 'Social', color1: '#089EAF', color2: '#05779B', image: require('../assets/social-icon.png'), description: 'Descrição do Social', iconWidth: 61, iconHeight: 63 },
  { name: 'Collection', color1: '#7338A3', color2: '#3E1A5A', image: require('../assets/collection-icon.png'), description: 'Descrição do Collection', iconWidth: 81, iconHeight: 76 },
  { name: 'MKT Suite', color1: '#D02373', color2: '#880A44', image: require('../assets/mkt-suite-icon.png'), description: 'Descrição do MKT Suite', iconWidth: 76, iconHeight: 81 },
];

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/LesSoft-logo-no-text.png')}
          style={styles.icon}
        />
        <Text style={styles.bannerText}>Conheça nossa vasta seleção de produtos</Text>
      </View>
      <View style={styles.productsContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <View style={[styles.product, styles.border]}>
              <LinearGradient
                colors={[product.color1, product.color2]}
                style={styles.gradient}
              >
                <Image source={product.image} style={{ width: product.iconWidth, height: product.iconHeight }} />
              </LinearGradient>
              <Text style={styles.productText}>{product.name}</Text>
            </View>
            <View style={[styles.description, styles.border]}>
              <Text style={styles.descriptionText}>{product.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333' },
  banner: {
    width: '100%',
    backgroundColor: '#222227', // Cor da tarja
    alignItems: 'center',
    paddingVertical: 20, // Ajusta a altura da tarja
    marginTop: 30,
    marginBottom: 50, // Espaço abaixo da tarja
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
  productsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  productContainer: { 
    width: 120, 
    margin: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  product: { 
    width: 120, 
    height: 120, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  gradient: { 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productText: { 
    color: '#fff', 
    marginTop: 10,
    textAlign: 'center', 
  },
  description: { 
    width: 120, 
    backgroundColor: '#444', 
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -20,
  },
  descriptionText: { 
    color: '#fff', 
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default ProductsScreen;
