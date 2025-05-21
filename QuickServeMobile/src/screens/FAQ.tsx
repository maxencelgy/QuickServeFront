import React, { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

type FAQItem = {
	question: string;
	answer: string;
};

const faqItems: FAQItem[] = [
	{
		question: "Qu'est-ce que l'intelligence artificielle ?",
		answer:
			"L'intelligence artificielle (IA) est un domaine de l'informatique qui vise à créer des systèmes capables de simuler l'intelligence humaine. Cela inclut l'apprentissage automatique, le traitement du langage naturel, la vision par ordinateur et d'autres technologies avancées.",
	},
	{
		question: "Comment l'IA peut-elle bénéficier à mon entreprise ?",
		answer:
			"L'IA peut aider votre entreprise à automatiser des tâches répétitives, améliorer la prise de décision, optimiser les processus, personnaliser l'expérience client et créer de nouvelles opportunités d'innovation.",
	},
	{
		question: "Quels types de serviceCategories d'IA proposez-vous ?",
		answer:
			"Nous proposons une gamme complète de serviceCategories d'IA, notamment le développement de solutions personnalisées, la consultation stratégique, la formation et l'accompagnement dans l'implémentation de l'IA.",
	},
	{
		question: "Combien de temps faut-il pour implémenter une solution d'IA ?",
		answer:
			"Le temps d'implémentation varie selon la complexité du projet et les besoins spécifiques. Un projet simple peut prendre quelques semaines, tandis qu'une solution plus complexe peut nécessiter plusieurs mois.",
	},
	{
		question: "Quel est le coût d'une solution d'IA ?",
		answer:
			"Le coût dépend de plusieurs facteurs, notamment la complexité du projet, les fonctionnalités requises et la durée de l'engagement. Nous proposons des solutions adaptées à différents budgets et besoins.",
	},
	{
		question: "Avez-vous des exemples de projets réussis ?",
		answer:
			"Oui, nous avons réalisé de nombreux projets réussis dans divers secteurs. Nous pouvons vous présenter des études de cas pertinentes lors de notre première consultation.",
	},
];

export default function FAQ() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Questions Fréquentes</Text>
				<Text style={styles.subtitle}>
					Trouvez des réponses aux questions les plus courantes sur nos services
					d'IA
				</Text>
			</View>

			<View style={styles.faqContainer}>
				{faqItems.map((item, index) => (
					<View key={index} style={styles.faqItem}>
						<TouchableOpacity
							style={styles.questionContainer}
							onPress={() => toggleExpand(index)}
						>
							<Text style={styles.question}>{item.question}</Text>
							<Text style={styles.expandIcon}>
								{expandedIndex === index ? "−" : "+"}
							</Text>
						</TouchableOpacity>

						{expandedIndex === index && (
							<View style={styles.answerContainer}>
								<Text style={styles.answer}>{item.answer}</Text>
							</View>
						)}
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		padding: 20,
		backgroundColor: "#f8f9fa",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 18,
		color: "#666",
	},
	faqContainer: {
		padding: 20,
	},
	faqItem: {
		marginBottom: 15,
		borderWidth: 1,
		borderColor: "#eee",
		borderRadius: 8,
		overflow: "hidden",
	},
	questionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "#f8f9fa",
	},
	question: {
		flex: 1,
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
	},
	expandIcon: {
		fontSize: 24,
		color: "#007AFF",
		marginLeft: 10,
	},
	answerContainer: {
		padding: 15,
		backgroundColor: "#fff",
	},
	answer: {
		fontSize: 16,
		color: "#666",
		lineHeight: 24,
	},
});
