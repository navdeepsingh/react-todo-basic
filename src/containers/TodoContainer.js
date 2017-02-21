import React, {Component} from 'react';
import TodoWrapper from '../components/TodoWrapper';
import Title from '../components/Title';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

window.id = 0;
class App extends Component {

  // Initialise state here ES6 constructor method or
  state = { data : [], input : ''}
  /*constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      input : ''
    }
  }*/

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmitTodo = (event) => {
    event.preventDefault();

    const todoValue = this.state.input;
    const todo = {text: todoValue, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data, input : ''});
    document.getElementById('todoBox').value = '';
  }

  hanleRemoveTodo = (id) => {
    const remainder = this.state.data.filter((todo) => {
       if(todo.id !== id) return todo;
    });

    // Update state with filter
    this.setState({data: remainder});
  }

  render() {
    return (
      <TodoWrapper>
        <Title todoCount={this.state.data.length} />
        <TodoForm onSubmitTodo={this.handleSubmitTodo} onChangeTodo={this.handleChange} />
        <TodoList
          todos={this.state.data}
          remove={this.hanleRemoveTodo.bind(this)} />
      </TodoWrapper>
    )
  }
}

export default App;
