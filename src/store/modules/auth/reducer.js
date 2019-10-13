import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  signed: false,
};

export default function Auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
