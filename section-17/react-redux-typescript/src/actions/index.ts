import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS', // ! could be a problem, since string. Could make it as enum
      payload: response.data, // ! could assign type to it. Currently is any
    });
  };
};
