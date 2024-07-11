import React from 'react';
import MovieDetails from '~/components/MovieDetails';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <MovieDetails imdbID={id!} Type={'series'} />;
};

export default Page;
