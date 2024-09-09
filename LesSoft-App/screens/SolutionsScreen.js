import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SolutionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conheça nossas soluções atuais para o mercado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  solutionContainer: { width: '90%', backgroundColor: '#666', padding: 20, marginBottom: 20 },
  solutionText: { fontSize: 20, color: '#fff' },
  solutionDescription: { fontSize: 16, color: '#fff' },
});

export default SolutionsScreen;
