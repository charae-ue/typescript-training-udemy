export enum ActionTypes {
  // the author argue that there's no need to give value to it, instead can use the default value, i.e. 0,
  // since how redux works is that each action type only needs to be unique
  // ! But I can't make it work, so revert to have string
  fetchTodos = 'FETCH_TODOS',
  deleteTodos = 'DELETE_TODOS',
}
