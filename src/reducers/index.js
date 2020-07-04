import authenticatedUser from './authedUser';
import users from './users';
import polls from './polls';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authenticatedUser,
  users,
  polls,
  loadingBar: loadingBarReducer,
});
