import { toast } from 'react-toastify';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signFailure } from './actions';

export function* signUp({ payload }) {
  try {
    const { name, email, password, passwordConfirmation } = payload.data;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      passwordConfirmation,
    });

    toast.success('Cadastro efetuado com sucesso!');

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
