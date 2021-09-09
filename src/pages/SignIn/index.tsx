import React from 'react';
import { Image } from 'react-native';

//@ts-expect-error
import logoImg from '../../assets/logo.png';

//components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Logon</Title>
      <Input name="email" icon="mail" placeholder="email" />
      <Input name="email" icon="lock" placeholder="senha" />
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  );
};
