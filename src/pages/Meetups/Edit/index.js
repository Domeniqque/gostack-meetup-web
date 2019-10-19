import { Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import DatePicker from '~/components/DatePicker';
import FileInput from '~/components/FileInput';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

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

export default function Edit() {
  const { id } = useParams();

  const meetup = useSelector(state =>
    state.meetup.list.find(m => m.id === Number(id))
  );

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateMeetupRequest(Number(id), data));
  }

  return (
    <Container>
      <header>
        <h1>Editar meetup</h1>
      </header>

      <Form initialData={meetup} onSubmit={handleSubmit} schema={schema}>
        <FileInput name="file_id" dataName="banner" />
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

        <Button type="submit">Salvar alterações</Button>
      </Form>
    </Container>
  );
}
