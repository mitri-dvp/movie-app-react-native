import { View, Text } from 'react-native';
import React from 'react';
import Drawer from 'expo-router/drawer';
import { themes } from '@tamagui/themes';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: theme.color8.val,
        drawerActiveTintColor: theme.color.val,
        drawerInactiveTintColor: theme.color1.val,
        drawerInactiveBackgroundColor: theme.color12.val,
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Moviestar',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default Layout;
