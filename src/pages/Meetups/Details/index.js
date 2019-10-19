import React from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import history from '~/services/history';
import colors from '~/styles/colors';

import { Container, Button } from '../styles';
import { MeetupDetails } from './styles';

export default function Details() {
  const { id } = useParams();

  const meetup = useSelector(state =>
    state.meetup.list.find(m => m.id === Number(id))
  );

  function handleEdit() {
    history.push(`/meetups/${meetup.id}/edit`);
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <aside>
          <Button type="button" background={colors.blue} onClick={handleEdit}>
            <MdEdit color="#fff" size={20} />
            <span>Editar</span>
          </Button>

          <Button type="button">
            <MdDeleteForever color="#fff" size={20} />
            <span>Cancelar</span>
          </Button>
        </aside>
      </header>
      <MeetupDetails>
        <figure>
          <img src={meetup.banner.url} alt={meetup.title} />
        </figure>

        <p>{meetup.description}</p>

        <section>
          <div>
            <MdEvent size={20} />
            <time dateTime={meetup.date}>{meetup.formatedDate}</time>
          </div>

          <div>
            <MdPlace size={20} />
            <address>{meetup.location}</address>
          </div>
        </section>
      </MeetupDetails>
    </Container>
  );
}
