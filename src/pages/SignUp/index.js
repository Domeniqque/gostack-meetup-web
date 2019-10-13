import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe seu email')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('A senha é obrigatória'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'As senhas não correspondem'
  ),
});

export default function SignUp() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(signUpRequest(data));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmar senha"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
      </Form>

      <Link to="/">Já tenho login</Link>
    </>
  );
}
