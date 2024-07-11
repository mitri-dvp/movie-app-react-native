import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '~/services/movie';
import { H1, H2, H3, Image, Paragraph, ScrollView, useTheme, YStack } from 'tamagui';
import { Text } from 'tamagui';
import { View } from 'react-native';

type MovieDetailsProps = Pick<Movie, 'imdbID' | 'Type'>;

const MovieDetails = ({ imdbID, Type }: MovieDetailsProps) => {
  const theme = useTheme();
  const { data: movie } = useQuery({
    queryKey: ['details', imdbID],
    queryFn: () => getMovieDetails(imdbID),
  });

  if (!movie) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          padding: 16,
        }}>
        <Image
          source={{
            uri: movie.Poster,
          }}
          w={200}
          h={300}
        />
      </View>
      <YStack
        px={16}
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
  );
};

export default MovieDetails;
