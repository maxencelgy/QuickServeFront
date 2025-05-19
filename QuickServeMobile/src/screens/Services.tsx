import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Package, Clock, Star } from 'lucide-react-native';
import { colors } from '../theme/colors';

type ServicesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const services = [
  {
    id: 'transport',
    title: 'Transport de colis',
    description: 'Livraison rapide et sécurisée de vos colis',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 15€',
    duration: '24-48h',
    rating: 4.8,
  },
  {
    id: 'demenagement',
    title: 'Déménagement',
    description: 'Service complet de déménagement professionnel',
    image: 'https://images.unsplash.com/photo-1580709839515-54b8991e2813?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 'Sur devis',
    duration: '1-2 jours',
    rating: 4.9,
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage',
    description: 'Nettoyage professionnel de vos espaces',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 25€/h',
    duration: '2-4h',
    rating: 4.7,
  },
  {
    id: 'depannage',
    title: 'Dépannage',
    description: 'Intervention rapide pour tous vos problèmes',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 45€',
    duration: '1-2h',
    rating: 4.6,
  },
];

const Services = () => {
  const navigation = useNavigation<ServicesScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Nos Services</Text>
        </View>
        <Text style={styles.title}>Des solutions pour tous vos besoins</Text>
        <Text style={styles.subtitle}>
          Découvrez notre gamme complète de services professionnels
        </Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceCard}
            onPress={() => navigation.navigate('ServiceDetail', { id: service.id })}
          >
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              
              <View style={styles.serviceInfo}>
                <View style={styles.infoItem}>
                  <Package size={16} color={colors.primary} />
                  <Text style={styles.infoText}>{service.price}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Clock size={16} color={colors.primary} />
                  <Text style={styles.infoText}>{service.duration}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Star size={16} color={colors.primary} />
                  <Text style={styles.infoText}>{service.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  badge: {
    backgroundColor: '#CCEFE3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.mutedForeground,
    lineHeight: 24,
  },
  servicesGrid: {
    padding: 20,
    gap: 20,
  },
  serviceCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  serviceImage: {
    width: '100%',
    height: 200,
  },
  serviceContent: {
    padding: 16,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.mutedForeground,
    marginBottom: 16,
  },
  serviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
});

export default Services; 