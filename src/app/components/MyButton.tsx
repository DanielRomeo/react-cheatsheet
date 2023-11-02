'use client'
import {useState} from 'react';

// types:
type titleType = { 
    title: string,
    disabled: boolean
};


const ButtonComponent =({title, disabled}: titleType)=>{
    const [mystate, setMystate] = useState<String>('');

    return (<div>
      <button disabled={disabled}>{title}</button>
    </div>)
  }

  export default ButtonComponent;
  