import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.color8.val,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Moviestar',
          headerTintColor: theme.color12.val,
          headerLeft: () => <DrawerToggleButton tintColor={theme.color12.val} />,
        }}
      />
    </Stack>
  );
};

export default Layout;
