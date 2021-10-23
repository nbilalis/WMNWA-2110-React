import { useReducer, KeyboardEvent } from 'react';

import { styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
// import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import { v4 } from 'uuid';

interface Todo {
  id: string;
  text?: string;
}

interface Action {
  type: 'ADD' | 'REMOVE';
  payload: Todo;
}

function Todos() {
  const [todos, dispatch] = useReducer((state: Todo[], action: Action) => {
    switch (action.type) {
      default:
      case 'ADD':
        return [...state, action.payload];
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload.id);
    }
  }, []);

  const addTodo = (event: KeyboardEvent) => {
    const el = event.target as HTMLInputElement;
    const { value } = el;

    if (event.code === 'Enter' && value) {
      dispatch({
        type: 'ADD',
        payload: { id: v4(), text: value },
      });

      el.value = '';
    }
  };

  const removeTodo = (id: string) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      <h2>
        Todos <Chip label={todos.length} />
      </h2>
      <TextField variant="standard" id="add-todo" label="Add a new Todo:" onKeyPress={addTodo} />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Demo>
          <List dense={false}>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <IconButton onClick={() => removeTodo(todo.id)} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={todo.text} />
              </ListItem>
            ))}
          </List>
        </Demo>
      </Box>
    </>
  );
}

export default Todos;
