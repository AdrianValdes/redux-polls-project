import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'sarah_edo';
// This is going to make an ajax request,
// so it is going to be a thunk.
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
