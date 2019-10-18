import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Meetups() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <Link to="/meetups/create">Novo meetup</Link>
      </header>
    </Container>
  );
}
