'use client'
import {useState} from 'react';
import { deflate } from 'zlib';

// updating objects and arrays in state:
// when clicking on button, change the color of the car:
// learned that previousState can be used when settingState.

interface carInterface{
  brand: string,
  model: string,
  year?: number,
  color: string
}

export default function Home() {
  const [car, setCar] = useState<carInterface>({
    brand: "ford",
    model: 'mustang',
    year: 1987,
    color: 'white'
  })

  const updateColor = (): void => {
    
    setCar((previousState: any)=>{
      switch(previousState.color){
        case 'white':
          return {...previousState, color: 'blue'}
         
        case 'blue':
          return {...previousState, color: 'white'}
       
        default:
          return {...previousState}
      }
    })
   
  }

  return (
    <div>
      <h4>{car.color} is the color of the car.</h4>
      <button onClick={updateColor}>change color</button>
    </div>
  )
}
