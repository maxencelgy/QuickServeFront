import { Mail, MapPin, Phone, Send } from "lucide-react-native";
import React, { useState } from "react";
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { colors } from "../theme/colors";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = () => {
		if (!name || !email || !message) {
			Alert.alert("Erreur", "Veuillez remplir tous les champs");
			return;
		}

		// Ici, vous pouvez ajouter la logique pour envoyer le message
		Alert.alert(
			"Message envoyé",
			"Nous vous répondrons dans les plus brefs délais.",
			[
				{
					text: "OK",
					onPress: () => {
						setName("");
						setEmail("");
						setMessage("");
					},
				},
			],
		);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.badge}>
					<Text style={styles.badgeText}>Contact</Text>
				</View>
				<Text style={styles.title}>
					Nous sommes là pour <Text style={styles.highlight}>vous aider</Text>
				</Text>
				<Text style={styles.subtitle}>
					Une question ? Un projet ? N'hésitez pas à nous contacter
				</Text>
			</View>

			<View style={styles.contactInfo}>
				<View style={styles.contactItem}>
					<View style={styles.contactIcon}>
						<Phone size={24} color={colors.primary} />
					</View>
					<View>
						<Text style={styles.contactLabel}>Téléphone</Text>
						<Text style={styles.contactValue}>+33 1 23 45 67 89</Text>
					</View>
				</View>
				<View style={styles.contactItem}>
					<View style={styles.contactIcon}>
						<Mail size={24} color={colors.primary} />
					</View>
					<View>
						<Text style={styles.contactLabel}>Email</Text>
						<Text style={styles.contactValue}>contact@quickserve.fr</Text>
					</View>
				</View>
				<View style={styles.contactItem}>
					<View style={styles.contactIcon}>
						<MapPin size={24} color={colors.primary} />
					</View>
					<View>
						<Text style={styles.contactLabel}>Adresse</Text>
						<Text style={styles.contactValue}>
							123 Rue de Paris, 75001 Paris
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.formSection}>
				<Text style={styles.formTitle}>Envoyez-nous un message</Text>
				<View style={styles.form}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Nom</Text>
						<TextInput
							style={styles.input}
							value={name}
							onChangeText={setName}
							placeholder="Votre nom"
							placeholderTextColor={colors.mutedForeground}
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Email</Text>
						<TextInput
							style={styles.input}
							value={email}
							onChangeText={setEmail}
							placeholder="Votre email"
							placeholderTextColor={colors.mutedForeground}
							keyboardType="email-address"
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Message</Text>
						<TextInput
							style={[styles.input, styles.textArea]}
							value={message}
							onChangeText={setMessage}
							placeholder="Votre message"
							placeholderTextColor={colors.mutedForeground}
							multiline
							numberOfLines={4}
						/>
					</View>
					<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
						<Send size={20} color={colors.primaryForeground} />
						<Text style={styles.submitButtonText}>Envoyer</Text>
					</TouchableOpacity>
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
	contactInfo: {
		padding: 20,
		gap: 16,
	},
	contactItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		backgroundColor: colors.secondary,
		padding: 16,
		borderRadius: 12,
	},
	contactIcon: {
		backgroundColor: "#CCEFE3",
		padding: 8,
		borderRadius: 20,
	},
	contactLabel: {
		fontSize: 14,
		color: colors.mutedForeground,
		marginBottom: 4,
	},
	contactValue: {
		fontSize: 16,
		color: colors.foreground,
		fontWeight: "500",
	},
	formSection: {
		padding: 20,
		backgroundColor: colors.background,
	},
	formTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: colors.foreground,
		marginBottom: 20,
	},
	form: {
		gap: 16,
	},
	inputGroup: {
		gap: 8,
	},
	label: {
		fontSize: 14,
		color: colors.foreground,
		fontWeight: "500",
	},
	input: {
		backgroundColor: colors.secondary,
		padding: 12,
		borderRadius: 8,
		fontSize: 16,
		color: colors.foreground,
		borderWidth: 1,
		borderColor: colors.border,
	},
	textArea: {
		height: 120,
		textAlignVertical: "top",
	},
	submitButton: {
		backgroundColor: colors.primary,
		padding: 16,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	},
	submitButtonText: {
		color: colors.primaryForeground,
		fontSize: 16,
		fontWeight: "600",
	},
});
