import React from 'react';

const Title = (props) => {
  return (
    <div>
       <div>
          <h1>To-do ({props.todoCount})</h1>
       </div>
    </div>
  )
}

module.exports = Title;
