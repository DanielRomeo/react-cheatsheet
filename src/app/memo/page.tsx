'use client'
import {useState, useMemo, ReactNode} from 'react';

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 100000000; i++) {
      num += 1;
    }
    return num;
  };

export default function Home(){

    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<string[]>([]);
    // const calculation: number = expensiveCalculation(count);
   
    const calculation2: ReactNode = useMemo(()=>{
          return <h3 style={{color: 'green'}}>expensiveCalculation(count)</h3>
    }, [count])
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = (): void => {
      setTodos((t: any): string[] => [...t, "New Todo"]);
    };


    return (
        <div>
        
        <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation2}
      </div>
        </div>
    )
}
