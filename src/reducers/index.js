import authedUser from './authedUser';
import users from './users';
import polls from './polls';
import { combineReducers } from 'redux';

export default combineReducers({
  authedUser,
  users,
  polls,
});
