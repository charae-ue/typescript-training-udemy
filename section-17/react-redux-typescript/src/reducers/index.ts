import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// interface to help describe the state of the entire store
// ! Cannot make it to work with `combineReducers`. Need to use `any` or `unknown alongside the `Todo[]` type to make it work

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers({
  todos: todosReducer,
});
