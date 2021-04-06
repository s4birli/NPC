import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import navigationMenu from './navigationMenu';
import user from './user';

export default (history) => combineReducers({
  router: connectRouter(history),
  navigationMenu,
  user,
});
