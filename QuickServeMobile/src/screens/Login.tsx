import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Lock, LogIn, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ActivityIndicator,
	Alert,
} from "react-native";
import type { RootStackParamList } from "../navigation/AppNavigator";
import { colors } from "../theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
	const navigation = useNavigation<LoginScreenNavigationProp>();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const handleLogin = async () => {
		if (!email || !password) {
			setError("Veuillez remplir tous les champs");
			return;
		}

		setIsLoading(true);
		setError("");
		setSuccess(false);

		try {
			const response = await fetch(`${API_URL}users/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Erreur de connexion");
			}

			// Stocker le token
			await AsyncStorage.setItem("bearerToken", data.token);
			
			// Afficher le message de succès
			setSuccess(true);
			Alert.alert(
				"Connexion réussie",
				"Vous êtes maintenant connecté !",
				[
					{
						text: "OK",
						onPress: () => {
							navigation.navigate("Main", {
								screen: "Dashboard"
							});
						},
					},
				]
			);
		} catch (err: any) {
			setError(err.message || "Une erreur est survenue");
			Alert.alert("Erreur", err.message || "Une erreur est survenue");
		} finally {
			setIsLoading(false);
		}
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
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
						keyboardType="email-address"
						autoComplete="email"
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
						value={password}
						onChangeText={setPassword}
						secureTextEntry
						autoComplete="password"
					/>
				</View>

				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				{success ? <Text style={styles.successText}>Connexion réussie !</Text> : null}

				<TouchableOpacity 
					style={[styles.submitButton, isLoading && styles.submitButtonDisabled]} 
					onPress={handleLogin}
					disabled={isLoading}
				>
					{isLoading ? (
						<ActivityIndicator color={colors.background} />
					) : (
						<>
							<LogIn
								size={20}
								color={colors.background}
								style={styles.submitIcon}
							/>
							<Text style={styles.submitText}>Se connecter</Text>
						</>
					)}
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
	submitButtonDisabled: {
		opacity: 0.7,
	},
	errorText: {
		color: colors.destructive,
		fontSize: 14,
		textAlign: "center",
		marginTop: 8,
	},
	successText: {
		color: colors.success,
		fontSize: 14,
		textAlign: "center",
		marginTop: 8,
	},
});

export default Login;
