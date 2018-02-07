import React from 'react';
import Filter from './Filter';
import store from './ReduxStore';

export default class FilterSection extends React.Component{

  componentWillUnmount(){
    this.unsub();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => this.forceUpdate());
  }

  onFilter = (filter) => {
    store.dispatch({ type: 'FILTER_RESULTS', filter });
  }

  render(){
    let state = store.getState();
    return <div>
      <Filter active={state.filter === 'ALL'} onClick={() => this.onFilter('ALL')} name="All" />
      <Filter active={state.filter === 'COMPLETED'} onClick={() => this.onFilter('COMPLETED')} name="Completed" />
      <Filter active={state.filter === 'NOT_COMPLETED'} onClick={() => this.onFilter('NOT_COMPLETED')} name="Active"/>
    </div>
  }
}
