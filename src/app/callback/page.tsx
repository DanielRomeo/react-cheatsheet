'use client'
import {useState, useMemo, ReactNode, useCallback} from 'react';
import Todos from './Todos';

{/*

Try running this and click the count increment button.

You will notice that the Todos component re-renders even when the todos do not change.

Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

This is because of something called "referential equality".

Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

*/}

export default function Home(){
    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<string[]>([]);
  
    const increment= (): void => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback (() : void => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
}
