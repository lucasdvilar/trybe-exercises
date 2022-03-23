import React, { useState } from 'react';
import useArray from './hooks/useArray';

const ToDoList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useArray([]);

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  }

  const addTask = () => {
    setList([...list, input]);
  }

  return (
    <div>
      <div>oi</div>
      <input type="text" onChange={ handleInput } />
      <button type="button" onClick={ addTask }>Adicionar tarefa</button>
      <ul>
        {list.map((task) => <li>{task}</li>)}
      </ul>
    </div>
  );
}

export default ToDoList;
