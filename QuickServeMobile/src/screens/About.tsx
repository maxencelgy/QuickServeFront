import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Clock, Users, Award, Star } from 'lucide-react-native';
import { colors } from '../theme/colors';

type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const About = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>À propos</Text>
        </View>
        <Text style={styles.title}>Notre histoire</Text>
        <Text style={styles.subtitle}>
          Découvrez comment nous transformons le service à domicile
        </Text>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Clock size={24} color={colors.primary} />
            <Text style={styles.statValue}>5+</Text>
            <Text style={styles.statLabel}>Années d'expérience</Text>
          </View>
          <View style={styles.statCard}>
            <Users size={24} color={colors.primary} />
            <Text style={styles.statValue}>1000+</Text>
            <Text style={styles.statLabel}>Clients satisfaits</Text>
          </View>
          <View style={styles.statCard}>
            <Award size={24} color={colors.primary} />
            <Text style={styles.statValue}>50+</Text>
            <Text style={styles.statLabel}>Professionnels certifiés</Text>
          </View>
          <View style={styles.statCard}>
            <Star size={24} color={colors.primary} />
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Note moyenne</Text>
          </View>
        </View>
      </View>

      <View style={styles.valuesSection}>
        <Text style={styles.sectionTitle}>Nos valeurs</Text>
        <View style={styles.valuesGrid}>
          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Qualité</Text>
            <Text style={styles.valueDescription}>
              Nous nous engageons à fournir des services d'excellence à chaque intervention.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Rapidité</Text>
            <Text style={styles.valueDescription}>
              Une intervention rapide et efficace pour répondre à vos besoins urgents.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Excellence</Text>
            <Text style={styles.valueDescription}>
              Des professionnels qualifiés et formés pour un service irréprochable.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Confiance</Text>
            <Text style={styles.valueDescription}>
              Une relation de confiance durable avec nos clients et nos partenaires.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Rejoignez notre réseau</Text>
        <Text style={styles.ctaDescription}>
          Devenez partenaire et développez votre activité avec QuickServe
        </Text>
        <View style={styles.ctaButtons}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.buttonText}>Nous contacter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              S'inscrire
            </Text>
          </TouchableOpacity>
        </View>
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
  statsSection: {
    padding: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.foreground,
  },
  statLabel: {
    fontSize: 14,
    color: colors.mutedForeground,
    textAlign: 'center',
  },
  valuesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: 16,
  },
  valuesGrid: {
    gap: 16,
  },
  valueCard: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: colors.mutedForeground,
    lineHeight: 20,
  },
  ctaSection: {
    padding: 20,
    backgroundColor: colors.secondary,
    margin: 20,
    borderRadius: 12,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: 8,
  },
  ctaDescription: {
    fontSize: 14,
    color: colors.mutedForeground,
    marginBottom: 20,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.primaryForeground,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: colors.primary,
  },
});

export default About; 