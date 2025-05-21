import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Home, Info, Package, Phone } from "lucide-react-native";
import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

type RootStackParamList = {
	Index: undefined;
	Services: undefined;
	About: undefined;
	Contact: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BottomNav = () => {
	const navigation = useNavigation<NavigationProp>();
	const route = useRoute();
	const insets = useSafeAreaInsets();

	const isActive = (routeName: string) => {
		return route.name === routeName;
	};

	const navItems = [
		{ name: "Index", icon: Home, label: "Accueil" },
		{ name: "Services", icon: Package, label: "Services" },
		{ name: "About", icon: Info, label: "À propos" },
		{ name: "Contact", icon: Phone, label: "Contact" },
	];

	return (
		<View style={[styles.container, { paddingBottom: insets.bottom }]}>
			{navItems.map((item) => (
				<TouchableOpacity
					key={item.name}
					style={styles.navItem}
					onPress={() =>
						navigation.navigate(item.name as keyof RootStackParamList)
					}
				>
					<item.icon
						size={24}
						color={
							isActive(item.name) ? colors.primary : colors.mutedForeground
						}
					/>
					<Text
						style={[
							styles.navLabel,
							{
								color: isActive(item.name)
									? colors.primary
									: colors.mutedForeground,
							},
						]}
					>
						{item.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.background,
		borderTopWidth: 1,
		borderTopColor: colors.border,
		paddingVertical: 8,
		paddingHorizontal: 16,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 64,
		zIndex: 1000,
	},
	navItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 8,
	},
	navLabel: {
		fontSize: 12,
		marginTop: 4,
	},
});

export default BottomNav;
