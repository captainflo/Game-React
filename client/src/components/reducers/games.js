import { GET_GAME, GET_GAMES, ERROR_GAME } from '../actions/types';
const INITIAL_STATE = {
  gameDetails: '',
  allGames: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GAME:
      return { ...state, gameDetails: action.payload || false };
    case GET_GAMES:
      return { ...state, allGames: action.payload || false, errorMessage: '' };
    case ERROR_GAME:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
