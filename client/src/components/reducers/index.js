import { combineReducers } from 'redux';
import auth from './auth';
import games from './games';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: auth,
  form: formReducer,
  games: games
});
