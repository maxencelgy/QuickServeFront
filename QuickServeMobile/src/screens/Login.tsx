import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Lock, LogIn, Mail } from "lucide-react-native";
import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import type { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
	const navigation = useNavigation<LoginScreenNavigationProp>();

	const handleLogin = () => {
		// Simuler une connexion réussie
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.badge}>
					<Text style={styles.badgeText}>QuickServe</Text>
				</View>
				<Text style={styles.title}>Bienvenue !</Text>
				<Text style={styles.subtitle}>
					Connectez-vous pour accéder à votre compte
				</Text>
			</View>

			<View style={styles.form}>
				<View style={styles.inputContainer}>
					<Mail
						size={20}
						color={colors.mutedForeground}
						style={styles.inputIcon}
					/>
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor={colors.mutedForeground}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Lock
						size={20}
						color={colors.mutedForeground}
						style={styles.inputIcon}
					/>
					<TextInput
						style={styles.input}
						placeholder="Mot de passe"
						placeholderTextColor={colors.mutedForeground}
						secureTextEntry
					/>
				</View>

				<TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
					<LogIn
						size={20}
						color={colors.background}
						style={styles.submitIcon}
					/>
					<Text style={styles.submitText}>Se connecter</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.registerLink}
					onPress={() => navigation.navigate("Register")}
				>
					<Text style={styles.registerText}>
						Pas encore de compte ?{" "}
						<Text style={styles.registerTextBold}>S'inscrire</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		padding: 20,
	},
	header: {
		alignItems: "center",
		marginTop: 40,
		marginBottom: 40,
	},
	badge: {
		backgroundColor: colors.primary,
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
		marginBottom: 16,
	},
	badgeText: {
		color: colors.background,
		fontSize: 14,
		fontWeight: "600",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: colors.foreground,
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: colors.mutedForeground,
		textAlign: "center",
	},
	form: {
		gap: 16,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.card,
		borderRadius: 12,
		paddingHorizontal: 16,
		height: 50,
	},
	inputIcon: {
		marginRight: 12,
	},
	input: {
		flex: 1,
		color: colors.foreground,
		fontSize: 16,
	},
	submitButton: {
		backgroundColor: colors.primary,
		borderRadius: 12,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 8,
	},
	submitIcon: {
		marginRight: 8,
	},
	submitText: {
		color: colors.background,
		fontSize: 16,
		fontWeight: "600",
	},
	registerLink: {
		marginTop: 16,
		alignItems: "center",
	},
	registerText: {
		color: colors.mutedForeground,
		fontSize: 14,
	},
	registerTextBold: {
		color: colors.primary,
		fontWeight: "600",
	},
});

export default Login;
