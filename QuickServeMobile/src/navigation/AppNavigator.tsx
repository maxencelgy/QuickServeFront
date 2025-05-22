import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
	Home,
	Info,
	LayoutDashboard,
	LogIn,
	LogOut,
	Mail,
	Package,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import About from "../screens/About";
import Contact from "../screens/Contact";
import Dashboard from "../screens/Dashboard";
// Screens
import Index from "../screens/Index";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ServiceDetail from "../screens/ServiceDetail";
import Services from "../screens/Services";

export type RootStackParamList = {
	Main: {
		screen?: string;
		params?: {
			screen?: string;
		};
	};
	Login: undefined;
	Register: undefined;
};

export type TabParamList = {
	Index: undefined;
	ServicesStack: {
		screen?: string;
	};
	About: undefined;
	Contact: undefined;
	Dashboard: undefined;
};

export type ServicesStackParamList = {
	Services: undefined;
	ServiceDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const ServicesStack = createNativeStackNavigator<ServicesStackParamList>();

// Stack pour les serviceCategories
const ServicesStackNavigator = () => {
	return (
		<ServicesStack.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: colors.background,
				},
				headerTintColor: colors.foreground,
			}}
		>
			<ServicesStack.Screen
				name="Services"
				component={Services}
				options={{
					title: "Nos Services",
				}}
			/>
			<ServicesStack.Screen
				name="ServiceDetail"
				component={ServiceDetail}
				options={{
					headerTitle: "Détail du service",
				}}
			/>
		</ServicesStack.Navigator>
	);
};

const TabNavigator = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Vérifier si l'utilisateur est connecté au chargement
		const checkLoginStatus = async () => {
			const token = await AsyncStorage.getItem("bearerToken");
			setIsLoggedIn(!!token);
		};
		checkLoginStatus();
	}, []);

	const handleLogin = async () => {
		if (isLoggedIn) {
			// Déconnexion
			await AsyncStorage.removeItem("bearerToken");
			setIsLoggedIn(false);
		} else {
			// Navigation vers l'écran de connexion
			navigation.navigate("Login");
		}
	};

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.mutedForeground,
				tabBarStyle: {
					backgroundColor: colors.background,
					borderTopColor: colors.border,
				},
				headerStyle: {
					backgroundColor: colors.background,
				},
				headerTintColor: colors.foreground,
				headerRight: () => (
					<TouchableOpacity onPress={handleLogin} style={{ marginRight: 16 }}>
						{isLoggedIn ? (
							<LogOut size={24} color={colors.primary} />
						) : (
							<LogIn size={24} color={colors.primary} />
						)}
					</TouchableOpacity>
				),
			}}
		>
			<Tab.Screen
				name="Index"
				component={Index}
				options={{
					title: "Accueil",
					tabBarIcon: ({ color }) => <Home size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name="ServicesStack"
				component={ServicesStackNavigator}
				options={{
					title: "Services",
					tabBarIcon: ({ color }) => <Package size={24} color={color} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="About"
				component={About}
				options={{
					title: "À propos",
					tabBarIcon: ({ color }) => <Info size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name="Contact"
				component={Contact}
				options={{
					title: "Contact",
					tabBarIcon: ({ color }) => <Mail size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					title: "Tableau de bord",
					tabBarIcon: ({ color }) => (
						<LayoutDashboard size={24} color={color} />
					),
					tabBarButton: (props: any) => (
						<TouchableOpacity
							{...props}
							onPress={() => {
								if (!isLoggedIn) {
									navigation.navigate("Login");
								} else if (props.onPress) {
									props.onPress();
								}
							}}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const AppNavigator = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Vérifier si l'utilisateur est connecté au chargement
		const checkLoginStatus = async () => {
			const token = await AsyncStorage.getItem("bearerToken");
			setIsLoggedIn(!!token);
		};
		checkLoginStatus();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Main" component={TabNavigator} />
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: true,
						headerTitle: "Connexion",
						headerStyle: {
							backgroundColor: colors.background,
						},
						headerTintColor: colors.foreground,
					}}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerShown: true,
						headerTitle: "Inscription",
						headerStyle: {
							backgroundColor: colors.background,
						},
						headerTintColor: colors.foreground,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
