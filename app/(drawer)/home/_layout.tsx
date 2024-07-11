import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTheme } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  const theme = useTheme();
  const router = useRouter();

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
      <Stack.Screen
        name="movie/[id]"
        options={{
          title: '',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.color12.val}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
