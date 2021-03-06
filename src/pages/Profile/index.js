import { Input } from '@rocketseat/unform';
import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container, Form, Button } from '~/styles';

import { Divider } from './styles';

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
      <header>
        <h1>Meu perfil</h1>
      </header>

      <Form onSubmit={handleSubmit} initialData={profile} schema={schema}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <Divider />

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

        <Button type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          <span>Salvar Perfil</span>
        </Button>
      </Form>
    </Container>
  );
}
