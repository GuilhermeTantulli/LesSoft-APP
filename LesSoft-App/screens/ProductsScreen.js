import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conheça nossa vasta seleção de produtos</Text>
      <View style={styles.productsContainer}>
        <View style={styles.product}>
          <Text style={styles.productText}>Omni CRM</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Hike</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Geo</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Social</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  productsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  product: { width: 100, height: 100, backgroundColor: '#555', margin: 10, justifyContent: 'center', alignItems: 'center' },
  productText: { color: '#fff' },
});

export default ProductsScreen;
