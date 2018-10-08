import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET = 'GET_SUMMONER';

/* ------------   ACTION CREATORS     ------------------ */

const get = summoner => ({ type: GET, summoner });

/* ------------       REDUCERS     ------------------ */

export default function reducer(summoner = {}, action) {
  switch (action.type) {
    case GET:
      return action.summoner;

    default:
      return summoner;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchSummoner = (name) => dispatch => {
  axios.get(`/api/summoner/${name}`)
  .then(res => dispatch(get(res.data)))
  .catch(err => console.error('Error fetchSummoner', err));
};
