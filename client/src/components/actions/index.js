import keys from '../../config/keys';
import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  EDIT_USER,
  GET_GAME,
  GET_GAMES,
  GET_GAME_NAME,
  GET_SCREENSHOTS,
  ERROR_SCREENSHOTS,
  GET_SIMULAR_GAME,
  GET_GAME_VIDEO,
  ERROR_SIMULAR_GAME,
  ERROR_GAME
} from './types';
import * as JWT from 'jwt-decode';

///////////////////////////////// User Authentification ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Signup with Passport JWT
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${keys.siteUrl}/signup`, formProps);
    localStorage.setItem('token', response.data.token);
    // then when you have the token decode it.
    let token = localStorage.token;
    if (token) {
      // Decode token
      token = JWT(token);
      // let token to variable data
      let data = token;
      data = {
        id: data.sub,
        email: data.email
      };
      const response = await axios.get(`/api/user/${data.id}`);
      dispatch({ type: AUTH_USER, payload: response.data });
      callback(); /* history callback */
    } else {
      token = null;
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Signin with Passport JWT
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${keys.siteUrl}/signin`, formProps);
    localStorage.setItem('token', response.data.token);
    // then when you have the token decode it.
    let token = localStorage.token;
    if (token) {
      // Decode token
      token = JWT(token);
      // let token to variable data
      let data = token;
      data = {
        id: data.sub,
        email: data.email
      };
      const response = await axios.get(`/api/user/${data.id}`);
      dispatch({ type: AUTH_USER, payload: response.data });
      callback(); /* history callback */
    } else {
      token = null;
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Signout User by Auth or Passport JWT
export const signout = () => async dispatch => {
  // Signout for Auth(Google, insta, linkedin, facebook)
  await axios.get('/api/logout');
  dispatch({ type: AUTH_USER, payload: '' });
  localStorage.removeItem('token');
  dispatch({ type: AUTH_ERROR, payload: '' });
};

// Fetch the user by Passport JWT
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  let token = localStorage.token;
  if (token) {
    // Decode token
    token = JWT(token);
    // let token to variable data
    let data = token;
    data = {
      id: data.sub,
      email: data.email
    };
    const response = await axios.get(`/api/user/${data.id}`);
    dispatch({ type: AUTH_USER, payload: response.data });
  } else {
    token = null;
    dispatch({ type: AUTH_USER, payload: res.data });
  }
};

// Edit User
export const editUser = (id, formValues, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_ERROR, payload: '' });
    const response = await axios.post(`/api/user/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Edit delete
export const deleteUser = (id, callback) => async dispatch => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};

// Search Game Series By name
export const GetGamesByName = name => async dispatch => {
  try {
    let game = name.split(' ').join('-');
    const Game = game.toLowerCase();
    const response = await axios.get(`https://api.rawg.io/api/games/${Game}`);
    if (response.data.redirect) {
      const res = await axios.get(
        `https://api.rawg.io/api/games/${response.data.slug}/game-series`
      );
      dispatch({ type: GET_GAMES, payload: res.data });
    } else {
      const otherResponse = await axios.get(
        `https://api.rawg.io/api/games/${Game}/game-series`
      );
      dispatch({ type: GET_GAMES, payload: otherResponse.data });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_GAME, payload: `No Game Found for ${name}` });
  }
};

// Search Game Series By name
export const GetGameByName = name => async dispatch => {
  try {
    let game = name.split(' ').join('-');
    const Game = game.toLowerCase();
    const response = await axios.get(`https://api.rawg.io/api/games/${Game}`);
    if (response.data.redirect) {
      const res = await axios.get(
        `https://api.rawg.io/api/games/${response.data.slug}`
      );
      dispatch({ type: GET_GAME_NAME, payload: res.data });
    } else {
      dispatch({ type: GET_GAME_NAME, payload: response.data });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_GAME, payload: `No Game Found for ${name}` });
  }
};

// Get Game By Id
export const GetGameById = id => async dispatch => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`);
    dispatch({ type: GET_GAME, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_GAME, payload: `No Game Found` });
  }
};

// Get ScreenShot Game
export const GetScreenshotsGame = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}/screenshots`
    );
    dispatch({ type: GET_SCREENSHOTS, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_SCREENSHOTS, payload: `No screen Found` });
  }
};

// Get SimularGame
export const GetSimularGame = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}/suggested`
    );
    dispatch({ type: GET_SIMULAR_GAME, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_SIMULAR_GAME, payload: `No Simular Game Found` });
  }
};

// Get VideoGame
export const GetVideoGame = id => async dispatch => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}/youtube`
    );
    dispatch({ type: GET_GAME_VIDEO, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_GAME, payload: `No video Game Found` });
  }
};
