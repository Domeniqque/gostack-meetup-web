import React, { useEffect } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadMeetupsRequest } from '~/store/modules/meetup/actions';
import { Container } from '~/styles';

import { MeetupList } from './styles';

export default function Meetups() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.list);

  useEffect(() => {
    dispatch(loadMeetupsRequest());
  }, []);// eslint-disable-line

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <aside>
          <Link to="/meetups/create">
            <MdAddCircleOutline color="#fff" size={20} />
            <span>Novo meetup</span>
          </Link>
        </aside>
      </header>
      {meetups.length ? (
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
      ) : (
        <p>Nenhum meetup cadastrado ainda</p>
      )}
    </Container>
  );
}
