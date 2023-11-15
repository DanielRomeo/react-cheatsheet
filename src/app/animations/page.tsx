'use client'
import {motion} from 'framer-motion'
import RotateBlock from './components/RotateBlock'
import { Container } from 'react-bootstrap'
import Dropbox from './components/Dropbox'
import WebButtons from './components/WebButtons'


export default function Home() {
    return (
      <div>
          <Container style={{border: '1px solid grey', height: '100vh' }}>
            {/* <RotateBlock></RotateBlock>
            <Dropbox></Dropbox> */}
            <WebButtons></WebButtons>
          </Container>
        </div>
        
      )
}
