import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './type';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// this is optional, though it's useful to do the checking for the dispatch type for extra safety and debugging
// e.g. if we accidentallt pass `ActionTypes.createTodos` instead of the intended `ActionTypes.fetchTodos`
// need to put into Dispatch (in function param) instead of in dispatch call like in video
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodosAction {
  type: ActionTypes.deleteTodos;
  payload: number; // provide just the id
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response = await axios.get<Todo[]>(url); // help TS to understand the return type

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.deleteTodos,
    payload: id,
  };
};
