import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import { toast } from 'react-toastify';

export default function Login() {
  toast.success('Oie Sucesso');
  toast.error('Oie Sucesso');

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small></small>
      </Title>
      <Paragrafo>Lorem ipsim sit amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
