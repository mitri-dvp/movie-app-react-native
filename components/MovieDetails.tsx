import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '~/services/movie';
import { H1, H2, H3, Image, Paragraph, ScrollView, useTheme, YStack } from 'tamagui';
import { Text } from 'tamagui';
import { View } from 'react-native';
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
import { Favorite } from '~/interfaces/favorites';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type MovieDetailsProps = Pick<Movie, 'imdbID' | 'Type'>;

const MovieDetails = ({ imdbID, Type }: MovieDetailsProps) => {
  const theme = useTheme();

  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  const list = favorites || [];

  const { data: movie } = useQuery({
    queryKey: ['details', imdbID],
    queryFn: () => getMovieDetails(imdbID),
  });

  if (!movie) return <Text>Loading...</Text>;

  const isFavorite = list.find((f) => f.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (!isFavorite) {
      setFavorites([
        ...list,
        {
          imdbID: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          Type: movie.Type,
        },
      ]);
    } else {
      setFavorites(list.filter((f) => f.imdbID !== movie.imdbID));
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: movie.Title,
          headerTintColor: theme.color12.val,
          headerRight: () => (
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={theme.color12.val}
              onPress={toggleFavorite}
            />
          ),
        }}
      />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={{ position: 'absolute' }}
            source={{
              uri: movie.Poster,
            }}
            w={400}
            h={332}
            blurRadius={10}
          />
          <View style={{ padding: 16 }}>
            <Image
              source={{
                uri: movie.Poster,
              }}
              w={200}
              h={300}
            />
          </View>
        </View>
        <YStack
          p={16}
          gap={8}
          animation={'lazy'}
          enterStyle={{
            opacity: 0,
            y: 10,
          }}>
          <H1 color={theme.color8}>
            {movie.Title} <Text fontSize={16}>({movie.Year})</Text>
          </H1>
          <Paragraph theme={'alt2'}>{movie.Genre}</Paragraph>
          <Text fontSize={16}>{movie.Plot}</Text>
        </YStack>
      </ScrollView>
    </>
  );
};

export default MovieDetails;
