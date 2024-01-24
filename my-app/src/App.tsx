import logo from './logo.svg';

import './App.css';
import {TodoTable} from './Components/TodoTable';
import React, {useState} from 'react';
import {NewTodoForm}  from './Components/NewTodoForm';

export const App = () => {
  const[showAddTodoForm, setShowAddTodoForm] = useState(false);

  const[todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Buy groceries",
      rowAssigned: "Jhon"
    },
    {
      rowNumber: 2,
      rowDescription: "Call mom",
      rowAssigned: "Doe"
    },
    {
      rowNumber: 3,
      rowDescription: "Call dad",
      rowAssigned: "Test"
    },
    {
      rowNumber: 4,
      rowDescription: "Pay the bills",
      rowAssigned: "Test"
    }
  ]);

  const addTodo = (description: string, assigned: string) => {
    console.log("A new todo was added/Button was clicked");
    let rowNumber = 0;
    if(todos.length > 0) {
      rowNumber = todos[todos.length-1].rowNumber+1;
    }
    else{
      rowNumber = 1;
    }
    const newTodo  = {
      rowNumber: rowNumber, 
      rowDescription: description, 
      rowAssigned: assigned};
      setTodos(todos => [...todos, newTodo]);
      console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber!== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button 
          className='btn btn-primary' 
          onClick={() =>
          setShowAddTodoForm(!showAddTodoForm)}>
            New Todo
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}