import React from 'react'
import store from'./ReduxStore'

let counter = 0;

export default () =>{
  let input;

  return <div>
    <input ref={pointer => input = pointer} type="text" />
    <button onClick={ () => {
      store.dispatch({
        type: "ADD_TODO",
        id: ++counter,
        name: input.value
      })
      input.value = "";
      }}> add</button>
  </div>
}