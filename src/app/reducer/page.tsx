'use client'
import {useReducer} from 'react';

interface todosType {
  id: number,
  title: string,
  complete: boolean
}

const initialTodos: todosType[] = [
  {
    id: 1,
    title: "Todo 1",
    complete: false
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state: todosType[], action: {type: string, id: number}) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Home(){

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo: todosType): void =>{
    dispatch({ type: "COMPLETE", id: todo.id });
    // dispatch({ id: todo.id, type: 'complete'});
  }

  return (
    <div>
      {todos.map((todo: todosType) => (
      <div key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />
          {todo.title}
        </label>
      </div>
    ))}

    {todos !== undefined ? JSON.stringify(todos): <></>}
    </div>
  )
}

