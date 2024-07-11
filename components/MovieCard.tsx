import React from 'react';
import { Card, H2, Paragraph } from 'tamagui';
import { XStack } from 'tamagui';
import { Button } from '~/tamagui.config';
import { Link } from 'expo-router';
import { Image } from 'tamagui';

const MovieCard = ({ movie }: { movie: Movie | MovieSearchResult }) => {
  // "movie" | "series"
  return (
    <Card
      key={movie.imdbID}
      elevate
      size="$4"
      bordered
      style={{ width: 300, height: 300, borderRadius: 10 }}>
      <Card.Header padded>
        <H2>{movie.Title}</H2>
        <Paragraph theme="alt2">{movie.Year}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Link href={`(drawer)/home/${movie.Type}/${movie.imdbID}`} asChild>
          <Button>View Details</Button>
        </Link>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="cover"
          alignSelf="center"
          style={{ borderRadius: 10 }}
          source={{
            width: 300,
            height: 300,
            uri: movie.Poster,
          }}
        />
      </Card.Background>
    </Card>
  );
};

export default MovieCard;
