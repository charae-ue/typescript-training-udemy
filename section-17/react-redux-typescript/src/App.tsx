/* eslint-disable @typescript-eslint/no-unused-vars */
// I chose to use functional component instead of class

import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos: Todo[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchTodos(): any; // TODO: Fix
}

// function _App({ todos, fetchTodos }: AppProps) {
//   return <div>Hi there!</div>;
// }

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
