import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_SUCCESS = 'GET_SUCCESS';
const GET_PENDING = 'GET_PENDING';
const GET_ERROR = 'GET_ERROR';

/* ------------   ACTION CREATORS     ------------------ */

const getSuccess = games => ({ type: GET_SUCCESS, games });
const getPending = () => ({ type: GET_PENDING });
const getError = error => ({ type: GET_ERROR, error });

/* ------------       REDUCERS     ------------------ */

export default function reducer(games = {}, action) {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        pending: false,
        error: false,
        games: action.games
      };

    case GET_PENDING:
      return {
        pending: true,
        error: false
      };

    case GET_ERROR:
      return {
        pending: false,
        error: true,
        message: action.error
      };

    default:
      return games;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchGames = (name) => dispatch => {
  dispatch(getPending());
  axios.get(`/api/summoner/${name}`)
  .then(res => dispatch(getSuccess(res.data)))
  .catch(error => dispatch(getError(error)));
};
