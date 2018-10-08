import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_GAMES';

/* ------------   ACTION CREATORS     ------------------ */

const get = games => ({ type: GET, games });

/* ------------       REDUCERS     ------------------ */

export default function reducer(games = [], action) {
  switch (action.type) {
    case GET:
      return action.games;

    default:
      return games;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchGames = (name) => dispatch => {
  axios.get(`/api/summoner/${name}`)
  .then(res => dispatch(get(res.data)))
  .catch(err => console.error('Error fetchGames', err));
};
