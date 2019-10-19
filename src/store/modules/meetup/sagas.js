import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { loadMeetupsRequest, loadMeetupsSuccess } from './actions';

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, '/meetups', data);

    toast.success('Meetup criado com sucesso!');
    yield put(loadMeetupsRequest());

    history.push('/meetups');
  } catch (err) {
    toast.error('Não foi possível salvar o meetup, verifique os dados!');
  }
}

export function* loadMeetups() {
  const response = yield call(api.get, '/organizing');

  const data = response.data.map(meetup => ({
    ...meetup,
    formatedDate: format(parseISO(meetup.date), "dd 'de' MMMMMM', às' H'h'", {
      locale: ptBR,
    }),
  }));

  yield put(loadMeetupsSuccess(data));
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
]);
