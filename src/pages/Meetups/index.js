import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, MeetupList } from './styles';

export default function Meetups() {
  // const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');

      const data = response.data.map(meetup => ({
        id: meetup.id,
        title: meetup.title,
        date: meetup.date,
        formatedDate: format(
          parseISO(meetup.date),
          "dd 'de' MMMMMM', às' H'h'",
          {
            locale: ptBR,
          }
        ),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <Link to="/meetups/create">Novo meetup</Link>
      </header>
      <MeetupList>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/meetups/${meetup.id}`}>
              <strong>{meetup.title}</strong>
              <div>
                <time dateTime={meetup.date}>{meetup.formatedDate}</time>
                <MdChevronRight color="#fff" size={28} />
              </div>
            </Link>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
