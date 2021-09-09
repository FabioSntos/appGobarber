import React from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Logon</Title>
    </Container>
  );
};
