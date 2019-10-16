import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>

        <nav>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>

          <button type="button" onClick={() => dispatch(signOut())}>
            Sair
          </button>
        </nav>
      </Content>
    </Container>
  );
}
