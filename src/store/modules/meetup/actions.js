export function addMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function loadMeetupsRequest() {
  return {
    type: '@meetup/LOAD_MEETUPS_REQUEST',
  };
}

export function loadMeetupsSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { id, data },
  };
}

export function updateMeetupSuccess(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { data },
  };
}
