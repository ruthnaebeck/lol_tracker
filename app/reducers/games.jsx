import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_SUCCESS = 'GET_SUCCESS';
const GET_PENDING = 'GET_PENDING';

/* ------------   ACTION CREATORS     ------------------ */

const getSuccess = games => ({ type: GET_SUCCESS, games });
const getPending = () => ({ type: GET_PENDING });

/* ------------       REDUCERS     ------------------ */

export default function reducer(games = {}, action) {
  switch (action.type) {
    case GET_SUCCESS:
      return {
        pending: false,
        games: action.games
      };

    case GET_PENDING:
      return {
        pending: true
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
  .catch(err => console.error('Error fetchGames', err));
};
