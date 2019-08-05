import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export default class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };


  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };


  render() {
    let todos = [];
      todos = this.state.todos;
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Tareas restantes: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        
      </div>
    );
  }
}
