import {
  GET_GAME,
  GET_GAMES,
  GET_GAME_NAME,
  GET_SCREENSHOTS,
  GET_SIMULAR_GAME,
  GET_GAME_VIDEO,
  ERROR_SIMULAR_GAME,
  ERROR_GAME,
  ERROR_SCREENSHOTS
} from '../actions/types';
const INITIAL_STATE = {
  gameName: '',
  gameDetails: '',
  allGames: '',
  simularGames: '',
  gameVideo: '',
  screenshots: '',
  errorMessage: '',
  errorScreenshots: '',
  errorSimular: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
        gameDetails: action.payload || false,
        gameName: '',
        allGames: ''
      };
    case GET_GAME_NAME:
      return { ...state, gameName: action.payload || false, errorMessage: '' };
    case GET_GAMES:
      return { ...state, allGames: action.payload || false, errorMessage: '' };
    case GET_SCREENSHOTS:
      return { ...state, screenshots: action.payload || false };
    case GET_SIMULAR_GAME:
      return { ...state, simularGames: action.payload || false };
    case GET_GAME_VIDEO:
      return { ...state, gameVideo: action.payload || false };
    case ERROR_GAME:
      return { ...state, errorMessage: action.payload };
    case ERROR_SIMULAR_GAME:
      return { ...state, errorSimular: action.payload };
    case ERROR_SCREENSHOTS:
      return { ...state, errorScreenshots: action.payload };
    default:
      return state;
  }
}
