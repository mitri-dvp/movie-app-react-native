import { Link } from 'expo-router';
import React from 'react';
import { useMMKVObject } from 'react-native-mmkv';
import { Text, useTheme } from 'tamagui';
import { Image, ListItem, ScrollView } from 'tamagui';
import { Favorite } from '~/interfaces/favorites';

const Page = () => {
  const theme = useTheme();
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  return (
    <ScrollView>
      {favorites && favorites.length > 0 ? (
        <>
          {favorites.map((f) => (
            <Link key={f.imdbID} href={`(drawer)/favorites/${f.Type}/${f.imdbID}`} asChild>
              <ListItem
                px={32}
                py={8}
                title={f.Title}
                subTitle={f.Type}
                size={'$3'}
                icon={() => <Image source={{ uri: f.Poster }} style={{ width: 50, height: 50 }} />}
              />
            </Link>
          ))}
        </>
      ) : (
        <Text als={'center'} py={16}>
          No Favorites Found
        </Text>
      )}
    </ScrollView>
  );
};

export default Page;
