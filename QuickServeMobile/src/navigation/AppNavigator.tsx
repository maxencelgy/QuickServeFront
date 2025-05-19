import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Package, Info, Mail, LayoutDashboard, LogIn, LogOut } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';

// Screens
import Index from '../screens/Index';
import Services from '../screens/Services';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import ServiceDetail from '../screens/ServiceDetail';

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Index: undefined;
  Services: undefined;
  ServiceDetail: { id: string };
  About: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// Stack pour les services
const ServicesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.foreground,
      }}
    >
      <Stack.Screen 
        name="Services" 
        component={Services}
        options={{
          title: 'Nos Services',
        }}
      />
      <Stack.Screen 
        name="ServiceDetail" 
        component={ServiceDetail}
        options={{
          headerTitle: 'Détail du service',
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigation.navigate('Login');
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
          <TouchableOpacity
            onPress={handleLogin}
            style={{ marginRight: 16 }}
          >
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
          title: 'Accueil',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="ServicesStack"
        component={ServicesStack}
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <Package size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: 'À propos',
          tabBarIcon: ({ color }) => <Info size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <Mail size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Tableau de bord',
          tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
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
            headerTitle: 'Connexion',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.foreground,
          }}
          listeners={{
            beforeRemove: handleLoginSuccess,
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{
            headerShown: true,
            headerTitle: 'Inscription',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.foreground,
          }}
          listeners={{
            beforeRemove: handleLoginSuccess,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 