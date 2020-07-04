import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

//Using thunk to handle asynchronous functions
export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authenticatedUser } = getState();
    dispatch(showLoading());
    //Calling the API using its savePoll function
    return savePoll({
      ...poll,
      author: authenticatedUser,
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}
