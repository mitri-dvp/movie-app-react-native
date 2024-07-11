import { View, Text } from 'react-native';
import React from 'react';
import { Card, H2, Paragraph } from 'tamagui';
import { XStack } from 'tamagui';
import { Button, Title } from '~/tamagui.config';

const Page = () => {
  return (
    <View>
      <Title>Home</Title>
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <H2>Card Title</H2>
          <Paragraph theme="alt2">subtitle</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
          <Button>Touch</Button>
        </Card.Footer>
      </Card>
    </View>
  );
};

export default Page;
