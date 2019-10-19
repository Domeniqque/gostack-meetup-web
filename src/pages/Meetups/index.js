import React, { useEffect } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadMeetupsRequest } from '~/store/modules/meetup/actions';

import { Container, MeetupList } from './styles';

export default function Meetups() {
  const meetups = useSelector(state => state.meetup.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMeetupsRequest());
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
