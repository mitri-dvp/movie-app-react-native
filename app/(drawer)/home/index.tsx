import { View, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Input, ScrollView, Spinner, useTheme, YStack } from 'tamagui';
import { Container, Subtitle, Title } from '~/tamagui.config';
import { useQuery } from '@tanstack/react-query';
import { getMovies, getSearchResults } from '~/services/movie';
import useDebounce from '~/utils/useDebounce';
import MovieCard from '~/components/MovieCard';

const Page = () => {
  const theme = useTheme();
  const [searchString, setSearchString] = useState('');
  const debouncedString = useDebounce(searchString, 300);

  const movies = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  });

  const search = useQuery({
    queryKey: ['search', debouncedString],
    queryFn: () => getSearchResults(debouncedString),
    enabled: debouncedString.length > 0,
  });

  const moviesData = movies.data;
  const searchData = search.data;
  const data = searchData || moviesData;

  const isLoading = movies.isLoading || search.isLoading;

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color={theme.color12.val}
              enterStyle={{
                opacity: 0,
                scale: 1.25,
                y: -10,
              }}
              style={{ textAlign: 'center' }}
              animation="bouncy">
              Trending
            </Title>
            <Input
              placeholder="Search for a movie, tv show, person...."
              placeholderTextColor={theme.color12.val}
              borderWidth={1}
              size={'$4'}
              value={searchString}
              onChangeText={(text) => setSearchString(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        style={{ textAlign: 'center' }}
        animation="lazy">
        {search.data ? 'Search Results' : 'Top 50'}
      </Subtitle>

      {isLoading && <Spinner py={14} size="large" color={theme.color10.val} />}

      {!isLoading ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
          {data ? (
            <>
              {data.length === 0 ? (
                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1 }}>
                  Movie not found
                </Text>
              ) : null}
              {data.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </>
          ) : null}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Page;
