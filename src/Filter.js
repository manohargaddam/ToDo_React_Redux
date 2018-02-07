import React from 'react';

export default ({ active, name, onClick }) => (
  active ?
    <a style={{ marginRight: "10px" }} >{name}</a>:
    <a style={{ marginRight: "10px" }} href="#" onClick={(e) => {
                    e.preventDefault();
                    onClick();
  }}>{name}</a>
)