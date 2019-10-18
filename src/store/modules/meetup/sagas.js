import { toast } from 'react-toastify';
import { all, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, '/meetups', data);

    toast.success('Meetup criado com sucesso!');

    history.push('/meetups');
  } catch (err) {
    toast.error('Não foi possível salvar o meetup, verifique os dados!');
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
