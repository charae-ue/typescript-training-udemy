/* eslint-disable @typescript-eslint/no-unused-vars */
// I chose to use functional component instead of class

import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos: Todo[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // fetchTodos: typeof fetchTodos; // ? This return a function which will dispatch a function
  // workaround is:
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchTodos: Function; // needed to fix the issue at `_App`
  deleteTodo: typeof deleteTodo; // * Unlike here, which is a standard action function
}

// function _App({ todos, fetchTodos }: AppProps) {
//   return <div>Hi there!</div>;
// }

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
