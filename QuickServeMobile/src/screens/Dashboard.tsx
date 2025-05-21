import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Clock, History, Package } from "lucide-react-native";
import React from "react";
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import type { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";

type DashboardScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Dashboard"
>;

const services = [
	{
		id: "1",
		title: "Développement IA",
		status: "En cours",
		progress: 75,
	},
	{
		id: "2",
		title: "Consultation IA",
		status: "Terminé",
		progress: 100,
	},
	{
		id: "3",
		title: "Formation IA",
		status: "Planifié",
		progress: 0,
	},
];

const Dashboard = () => {
	const navigation = useNavigation<DashboardScreenNavigationProp>();

	const handleLogout = () => {
		Alert.alert("Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", [
			{
				text: "Annuler",
				style: "cancel",
			},
			{
				text: "Déconnexion",
				onPress: () => navigation.navigate("Login"),
			},
		]);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.badge}>
					<Text style={styles.badgeText}>Tableau de bord</Text>
				</View>
				<Text style={styles.title}>
					Bienvenue sur <Text style={styles.highlight}>QuickServe</Text>
				</Text>
				<Text style={styles.subtitle}>
					Gérez vos services et suivez vos commandes
				</Text>
			</View>

			<View style={styles.statsSection}>
				<View style={styles.statsCard}>
					<View style={styles.statsIcon}>
						<Package size={24} color={colors.primary} />
					</View>
					<View style={styles.statsContent}>
						<Text style={styles.statsValue}>0</Text>
						<Text style={styles.statsLabel}>Services actifs</Text>
					</View>
				</View>
				<View style={styles.statsCard}>
					<View style={styles.statsIcon}>
						<Clock size={24} color={colors.primary} />
					</View>
					<View style={styles.statsContent}>
						<Text style={styles.statsValue}>0</Text>
						<Text style={styles.statsLabel}>En attente</Text>
					</View>
				</View>
			</View>

			<View style={styles.section}>
				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>Mes services</Text>
					<TouchableOpacity>
						<Text style={styles.sectionLink}>Voir tout</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.emptyState}>
					<Package size={48} color={colors.mutedForeground} />
					<Text style={styles.emptyStateText}>Aucun service actif</Text>
					<TouchableOpacity style={styles.emptyStateButton}>
						<Text style={styles.emptyStateButtonText}>
							Découvrir les services
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.section}>
				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>Historique</Text>
					<TouchableOpacity>
						<Text style={styles.sectionLink}>Voir tout</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.emptyState}>
					<History size={48} color={colors.mutedForeground} />
					<Text style={styles.emptyStateText}>Aucun historique</Text>
					<TouchableOpacity style={styles.emptyStateButton}>
						<Text style={styles.emptyStateButtonText}>Voir les services</Text>
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
		backgroundColor: colors.secondary,
		alignItems: "center",
	},
	badge: {
		backgroundColor: "#CCEFE3",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
		marginBottom: 16,
	},
	badgeText: {
		color: colors.primary,
		fontSize: 14,
		fontWeight: "600",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 12,
		lineHeight: 36,
		color: colors.foreground,
	},
	highlight: {
		color: colors.primary,
	},
	subtitle: {
		fontSize: 16,
		color: colors.mutedForeground,
		textAlign: "center",
		marginBottom: 24,
		lineHeight: 24,
	},
	statsSection: {
		flexDirection: "row",
		padding: 20,
		gap: 16,
	},
	statsCard: {
		flex: 1,
		backgroundColor: colors.secondary,
		padding: 16,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	statsIcon: {
		backgroundColor: "#CCEFE3",
		padding: 8,
		borderRadius: 20,
	},
	statsContent: {
		flex: 1,
	},
	statsValue: {
		fontSize: 24,
		fontWeight: "bold",
		color: colors.foreground,
		marginBottom: 4,
	},
	statsLabel: {
		fontSize: 14,
		color: colors.mutedForeground,
	},
	section: {
		padding: 20,
	},
	sectionHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: colors.foreground,
	},
	sectionLink: {
		fontSize: 14,
		color: colors.primary,
		fontWeight: "500",
	},
	emptyState: {
		backgroundColor: colors.secondary,
		padding: 24,
		borderRadius: 12,
		alignItems: "center",
		gap: 12,
	},
	emptyStateText: {
		fontSize: 16,
		color: colors.mutedForeground,
		textAlign: "center",
	},
	emptyStateButton: {
		backgroundColor: colors.primary,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
	},
	emptyStateButtonText: {
		color: colors.primaryForeground,
		fontSize: 14,
		fontWeight: "500",
	},
});

export default Dashboard;
