import React from 'react';

// Stateless Function Component
const TodoForm = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmitTodo}>
          <input
            type="text"
            id="todoBox"
            placeholder="What to do?"
            className="form-control"
            onChange={props.onChangeTodo} />
        </form>
    </div>
  )
}

module.exports = TodoForm;
