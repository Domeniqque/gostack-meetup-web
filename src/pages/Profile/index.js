import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'A senha deve ter no mínimo 6 dígitos')
          .required('Informe a nova senha')
      : field
  ),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirme sua senha')
          .oneOf(
            [Yup.ref('password')],
            'A confirmação de senha não corresponde'
          )
      : field
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile} schema={schema}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Salvar Perfil</button>
      </Form>
    </Container>
  );
}
