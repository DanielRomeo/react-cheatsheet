import Image from 'next/image'
import styles from './page.module.css'
// import {useState} from 'react';
import ButtonComponent from './components/MyButton'

export default function Home() {
  // const [mystate, setMystate] = useState({});
  return (
    <div>
      <h4>hello</h4>
      <ButtonComponent title='Click me' disabled={false}></ButtonComponent>
    </div>
  )
}
