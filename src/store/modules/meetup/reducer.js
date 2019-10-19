import produce from 'immer';

const INITIAL_STATE = {
  list: [],
};

export default function Meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS': {
        draft.list = action.payload.meetups;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.list = [];
        break;
      }
      default:
    }
  });
}
