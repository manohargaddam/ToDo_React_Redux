import React from'react'
import store from'./ReduxStore'
import TodoList from './TodoList'

export default class VisibleTodoList extends React.Component{
  componentDidMount(){
    this.unsub = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount(){
    this.unsub();
  }

  filterTodo = (todo, filter) => {
      switch (filter) {
        case 'ALL':
          return true;
        case 'COMPLETED':
          return todo.completed;
        case 'NOT_COMPLETED':
          return !todo.completed;
        default:
          return true;
      }
  }

  toggleTodo = (id) => {
    store.dispatch({
      type: "TOGGLE_COMPLETE", id
    });
  }

  render(){
    const state = store.getState();

    return <TodoList todos={state.todos.filter((t) => this.filterTodo(t,state.filter))} toggleTodo={this.toggleTodo} />
  }
}