import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header / Banner */}
      <View style={styles.header}>
        <Image 
          source={require('/assets/snack-icon.png')} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Kopi Digital Indonesia</Text>
        <Text style={styles.subtitle}>Solusi Kafein & Bisnis Modern</Text>
      </View>

      {/* Deskripsi & Layanan */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tentang Kami</Text>
        <Text style={styles.cardText}>
          Menyediakan biji kopi pilihan terbaik untuk mendukung produktivitas pebisnis digital.
        </Text>
      </View>

      {/* Layanan */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Layanan Kami</Text>
        <Text style={styles.itemText}>• Supply Biji Kopi Premium</Text>
        <Text style={styles.itemText}>• Kemitraan Franchise Franchise</Text>
        <Text style={styles.itemText}>• Event & Catering Barista</Text>
      </View>

      {/* Call to Action */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hubungi Kami</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { alignItems: 'center', marginVertical: 20 },
  logo: { width: 90, height: 90, borderRadius: 0, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  cardText: { color: '#555', lineHeight: 20 },
  itemText: { fontSize: 14, color: '#444', marginVertical: 2 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

