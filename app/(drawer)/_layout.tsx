import { View, Text } from 'react-native';
import React from 'react';
import Drawer from 'expo-router/drawer';
import { colorTokens } from '@tamagui/themes';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: 'white',
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
