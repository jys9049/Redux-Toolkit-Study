import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addTodo, deleteTodo, checkTodo } from '../../features/todo/todosSlice';

const Todo = () => {
  const todos = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch();

  const [input, setInput] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <div style={{ display: 'flex' }}>
        <input value={input} onChange={handleChange} />
        <button onClick={handleSubmit}>ADD</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {todos.map((item, idx) => {
          return (
            <div
              style={{
                display: 'flex',
                gap: '8px',
                color: item.checked ? 'red' : 'black',
              }}
              key={idx}
            >
              <span>{idx}.</span>
              <span>{item.title}</span>
              <button onClick={() => dispatch(checkTodo(idx))}>V</button>
              <button onClick={() => dispatch(deleteTodo(idx))}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
