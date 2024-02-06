/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, ActionTypes, Todo } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      // `action.payload` is number, i.e. the id (can view the type to see)
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
