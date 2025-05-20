import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Package, Clock, Star, MapPin, Phone, Mail } from 'lucide-react-native';
import { colors } from '../theme/colors';

type ServiceDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ServiceDetail'>;

const services = {
  transport: {
    title: 'Transport de colis',
    description: 'Livraison rapide et sécurisée de vos colis',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 15€',
    duration: '24-48h',
    rating: 4.8,
    reviews: 124,
    location: 'Paris et région parisienne',
    contact: {
      phone: '+33 1 23 45 67 89',
      email: 'transport@quickserve.fr',
    },
  },
  demenagement: {
    title: 'Déménagement',
    description: 'Service complet de déménagement professionnel',
    image: 'https://images.unsplash.com/photo-1580709839515-54b8991e2813?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 'Sur devis',
    duration: '1-2 jours',
    rating: 4.9,
    reviews: 89,
    location: 'France entière',
    contact: {
      phone: '+33 1 23 45 67 90',
      email: 'demenagement@quickserve.fr',
    },
  },
  nettoyage: {
    title: 'Nettoyage',
    description: 'Nettoyage professionnel de vos espaces',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 25€/h',
    duration: '2-4h',
    rating: 4.7,
    reviews: 156,
    location: 'Paris et région parisienne',
    contact: {
      phone: '+33 1 23 45 67 91',
      email: 'nettoyage@quickserve.fr',
    },
  },
  depannage: {
    title: 'Dépannage',
    description: 'Intervention rapide pour tous vos problèmes',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 'À partir de 45€',
    duration: '1-2h',
    rating: 4.6,
    reviews: 98,
    location: 'Paris et région parisienne',
    contact: {
      phone: '+33 1 23 45 67 92',
      email: 'depannage@quickserve.fr',
    },
  },
};

const ServiceDetail = () => {
  const route = useRoute();
  const navigation = useNavigation<ServiceDetailScreenNavigationProp>();
  const { id } = route.params as { id: string };
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: service.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{service.title}</Text>
          <View style={styles.ratingContainer}>
            <Star size={20} color={colors.primary} />
            <Text style={styles.rating}>{service.rating}</Text>
            <Text style={styles.reviews}>({service.reviews} avis)</Text>
          </View>
        </View>

        <Text style={styles.description}>{service.description}</Text>

        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Package size={24} color={colors.primary} />
            <Text style={styles.infoLabel}>Prix</Text>
            <Text style={styles.infoValue}>{service.price}</Text>
          </View>
          <View style={styles.infoItem}>
            <Clock size={24} color={colors.primary} />
            <Text style={styles.infoLabel}>Durée</Text>
            <Text style={styles.infoValue}>{service.duration}</Text>
          </View>
          <View style={styles.infoItem}>
            <MapPin size={24} color={colors.primary} />
            <Text style={styles.infoLabel}>Zone</Text>
            <Text style={styles.infoValue}>{service.location}</Text>
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contactez-nous</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Phone size={20} color={colors.primary} />
              <Text style={styles.contactText}>{service.contact.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Mail size={20} color={colors.primary} />
              <Text style={styles.contactText}>{service.contact.email}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Réserver ce service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.foreground,
  },
  reviews: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
  description: {
    fontSize: 16,
    color: colors.mutedForeground,
    lineHeight: 24,
    marginBottom: 24,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  infoItem: {
    alignItems: 'center',
    gap: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.foreground,
  },
  contactSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: 16,
  },
  contactInfo: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    fontSize: 16,
    color: colors.foreground,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primaryForeground,
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: colors.mutedForeground,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ServiceDetail; 