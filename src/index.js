import React from 'react';
import { render } from 'react-dom';
import store from './ReduxStore';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterSection from './FilterSection';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <FilterSection store={store} onClick={this.onFilter} selectedFilter={store.getState().filter} />
      </div>
    )
  }
}

const renderApp = () => { render(<App />, document.getElementById('root')) }
store.subscribe(renderApp);
store.subscribe(()=> console.log(store.getState()));
renderApp();
