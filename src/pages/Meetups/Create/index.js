import { Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import DatePicker from '~/components/DatePicker';
import FileInput from '~/components/FileInput';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Form, Button } from '../styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required('Selecione uma imagem para o evento'),
  title: Yup.string().required('Informe o título do meetup'),
  description: Yup.string().required(
    'Descreva informações importantes do evento'
  ),
  date: Yup.date().required('Informe a data do evento'),
  location: Yup.string().required('O local do evento é obrigatório'),
});

export default function Create() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <header>
        <h1>Novo meetup</h1>
      </header>

      <Form onSubmit={handleSubmit} schema={schema}>
        <FileInput name="file_id" />
        <Input name="title" placeholder="Titulo do Meetup" autoComplete="off" />
        <Input
          name="description"
          multiline
          placeholder="Descrição completa"
          autoComplete="off"
        />
        <DatePicker
          name="date"
          placeholder="Data do Meetup"
          autoComplete="off"
        />
        <Input name="location" placeholder="Localização" autoComplete="off" />

        <Button type="submit">Salvar meetup</Button>
      </Form>
    </Container>
  );
}
