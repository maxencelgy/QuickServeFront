import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
	NotFound: undefined;
	Index: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "NotFound">;

export default function NotFound() {
	const navigation = useNavigation<NavigationProp>();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>404</Text>
			<Text style={styles.subtitle}>Page non trouvée</Text>
			<Text style={styles.description}>
				Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Index")}
			>
				<Text style={styles.buttonText}>Retour à l'accueil</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 72,
		fontWeight: "bold",
		color: "#007AFF",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "600",
		color: "#333",
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		color: "#666",
		textAlign: "center",
		marginBottom: 30,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});
