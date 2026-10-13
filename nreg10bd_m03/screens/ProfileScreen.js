import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Text style={styles.title}>Kopi Digital Indonesia</Text>
        <Text style={styles.subtitle}>Solusi Kafein & Bisnis Modern</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tentang Kami</Text>
        <Text style={styles.cardText}>
          Menyediakan biji kopi pilihan terbaik untuk mendukung produktivitas pebisnis digital.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Layanan Utama</Text>
        <Text style={styles.itemText}>• Supply Biji Kopi Premium</Text>
        <Text style={styles.itemText}>• Kemitraan Franchise</Text>
        <Text style={styles.itemText}>• Event & Catering Barista</Text>
      </View>

      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Katalog')}
      >
        <Text style={styles.primaryButtonText}>Lihat Katalog & Belanja (M2) ➔</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.secondaryButtonText}>Masuk Area Manajemen (M3)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  header: { alignItems: 'center', marginVertical: 15 },
  logo: { width: 80, height: 80, borderRadius: 12, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 13, color: '#666', marginTop: 2 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  cardText: { color: '#555', lineHeight: 20 },
  itemText: { fontSize: 14, color: '#444', marginVertical: 2 },
  primaryButton: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, alignItems: 'center', marginVertical: 6 },
  primaryButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  secondaryButton: { backgroundColor: '#e9ecef', padding: 14, borderRadius: 8, alignItems: 'center', marginVertical: 6 },
  secondaryButtonText: { color: '#495057', fontWeight: 'bold', fontSize: 15 },
});