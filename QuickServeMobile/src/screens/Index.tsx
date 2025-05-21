import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Clock, Package, Star, Users } from "lucide-react-native";
import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { colors } from "../theme/colors";
import type { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Index() {
	const navigation = useNavigation<NavigationProp>();

	const navigateToServices = () => {
		navigation.navigate("Main", {
			screen: "ServicesStack",
			params: {
				screen: "Services"
			}
		});
	};

	return (
		<ScrollView style={styles.container}>
			{/* Hero Section */}
			<View style={styles.hero}>
				<View style={styles.heroContent}>
					<View style={styles.badge}>
						<Text style={styles.badgeText}>Bienvenue</Text>
					</View>

					<Text style={styles.title}>
						Trouvez le service dont vous avez{" "}
						<Text style={styles.highlight}>besoin</Text>
					</Text>

					<Text style={styles.subtitle}>
						Des professionnels qualifiés à votre service, 24h/24 et 7j/7
					</Text>

					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.primaryButton}
							onPress={navigateToServices}
						>
							<Text style={styles.primaryButtonText}>Découvrir</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.secondaryButton}
							onPress={() => navigation.navigate("Main", { screen: "About" })}
						>
							<Text style={styles.secondaryButtonText}>En savoir plus</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.heroImageContainer}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
						}}
						style={styles.heroImage}
					/>
					<View style={styles.statsCard}>
						<View style={styles.statsContent}>
							<View style={styles.statsIcon}>
								<Package size={24} color={colors.primary} />
							</View>
							<View>
								<Text style={styles.statsText}>
									<Text style={styles.statsBold}>1000+</Text> services
								</Text>
								<Text style={styles.statsText}>réalisés</Text>
							</View>
						</View>
					</View>
				</View>
			</View>

			{/* Stats Section */}
			<View style={styles.statsSection}>
				<View style={styles.statItem}>
					<Text style={styles.statNumber}>5+</Text>
					<Text style={styles.statLabel}>Années d'expérience</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statNumber}>15k+</Text>
					<Text style={styles.statLabel}>Clients satisfaits</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statNumber}>250+</Text>
					<Text style={styles.statLabel}>Professionnels</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	hero: {
		padding: 20,
		backgroundColor: colors.secondary,
	},
	heroContent: {
		alignItems: "center",
		marginBottom: 20,
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
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 12,
		lineHeight: 40,
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
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 12,
	},
	primaryButton: {
		backgroundColor: colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 8,
	},
	primaryButtonText: {
		color: colors.primaryForeground,
		fontSize: 16,
		fontWeight: "600",
	},
	secondaryButton: {
		borderWidth: 2,
		borderColor: colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 8,
	},
	secondaryButtonText: {
		color: colors.primary,
		fontSize: 16,
		fontWeight: "600",
	},
	heroImageContainer: {
		position: "relative",
		marginTop: 20,
	},
	heroImage: {
		width: "100%",
		height: 200,
		borderRadius: 16,
	},
	statsCard: {
		position: "absolute",
		bottom: -20,
		right: -10,
		backgroundColor: colors.background,
		padding: 12,
		borderRadius: 12,
		shadowColor: colors.foreground,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	statsContent: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	statsIcon: {
		backgroundColor: "#CCEFE3",
		padding: 8,
		borderRadius: 20,
	},
	statsIconText: {
		color: colors.primary,
		fontSize: 16,
	},
	statsText: {
		fontSize: 12,
		color: colors.foreground,
	},
	statsBold: {
		fontWeight: "bold",
	},
	statsSection: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 20,
		backgroundColor: colors.background,
		borderTopWidth: 1,
		borderTopColor: colors.border,
	},
	statItem: {
		alignItems: "center",
	},
	statNumber: {
		fontSize: 24,
		fontWeight: "bold",
		color: colors.primary,
		marginBottom: 4,
	},
	statLabel: {
		fontSize: 14,
		color: colors.mutedForeground,
	},
});
