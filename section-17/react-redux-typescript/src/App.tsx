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

interface AppState {
  isFetching: boolean;
}

// * Would love to just use function component, though might need to use `useEffect` for data fetching :(
// * and don't wanna get my hand dirty importing data fetching lib just for this simple tutorial
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { isFetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    console.log({ prevProps });

    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ isFetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ isFetching: true });
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
        {this.state.isFetching ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
