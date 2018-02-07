import React from 'react';
import Todo from './Todo';

export default ({ todos, filter, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => <Todo {...todo} key={todo.id} onClick={() => toggleTodo(todo.id)}></Todo>)}
    </ul>
  )
};
