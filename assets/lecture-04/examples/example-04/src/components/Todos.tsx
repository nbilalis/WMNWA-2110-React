import { useReducer, useRef } from 'react';
import { v4 } from 'uuid';

import './Todos.scss';

interface Todo {
  id: string;
  text?: string; // text is optional
}

interface Action {
  type: 'ADD' | 'REMOVE';
  payload: Todo;
}

// The reducer function for the Todos
const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

// This is a uncontrolled component
// Its value is accessed upon form submission
function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const inputEl = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const el = inputEl.current;
    const val = el?.value.trim();

    if (el && val && val.length) {
      // Add a new Todo item
      dispatch({
        type: 'ADD',
        payload: { id: v4(), text: val },
      });
      // Clear the value of the input element
      el.value = '';
      el.focus();
    }
  };

  return (
    <>
      <h2>Todos: {todos.length}</h2>
      <input ref={inputEl} type="text" title="Enter Todo text here" placeholder="Enter Todo text here" />
      <button type="button" onClick={addTodo}>
        💾
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'REMOVE', payload: { id: todo.id } });
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
