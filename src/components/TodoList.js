import React from 'react';

const TodoList = (props) => {

  const TodoNode = props.todos;
  const list = TodoNode.map((todo) => {
    return (<a href="" className="list-group-item" onClick={(e) => {props.remove(e, todo.id)}}>{todo.text}</a>)
  })

  return (
      <div>
        <div className="list-group" style={{marginTop:'30px'}}>
            {list}
        </div>
      </div>
    )
}

module.exports = TodoList;
