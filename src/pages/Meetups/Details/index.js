import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../styles';

export default function Details() {
  const { id } = useParams();
  // const [meetup, setMeetup] = useState();

  // useEffect(() => {
  //   async function loadMeetup() {
  //     const response = await api.get('/meetups')
  //   }

  //   loadMeetup();
  // }, [id]);

  console.tron.log({ id });
  return (
    <Container>
      <header>
        <h1>Visualizar</h1>
      </header>
    </Container>
  );
}
