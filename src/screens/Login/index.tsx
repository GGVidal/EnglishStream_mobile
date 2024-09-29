import Button from '@atoms/Button';
import Input from '@atoms/Input';
import React from 'react';
import { Image, View } from 'react-native';
import {
  ButtonContainer,
  Container,
  EmailContainer,
  LabelInput,
  PasswordContainer,
  Title,
} from './styles';

export const Login = () => {
  return (
    <Container>
      <Image source={require('../../../assets/logo_natani.png')} />
      <Title variation="Body" size="XL">
        Log in to your account
      </Title>
      <EmailContainer>
        <LabelInput variation="Body" size="MD">
          E-mail
        </LabelInput>
        <Input
          accessible
          accessibilityLabel="Enter your email address"
          placeholder="E-mail"
          color={''}
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          size={'small'}
        />
      </EmailContainer>
      <PasswordContainer>
        <LabelInput variation="Body" size="MD">
          Password
        </LabelInput>
        <Input
          accessible
          accessibilityLabel="Enter your password"
          placeholder="Password"
          secureTextEntry
          color={''}
          keyboardType="default"
          textContentType="password"
          size={'small'}
        />
      </PasswordContainer>
      <ButtonContainer>
        <Button color="primary" size={'SM'} mode={'filled'}>
          Sign in
        </Button>
      </ButtonContainer>
    </Container>
  );
};
