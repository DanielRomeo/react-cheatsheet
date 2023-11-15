'use client'
import {motion, AnimatePresence} from 'framer-motion'
import Styles from './styles/webbuttons.module.scss'
import { useState } from 'react'
import {Row, Col, Dropdown, Button} from 'react-bootstrap'


const WebButtons = () =>{

    return (
        <div>
            <Button className={Styles.Button}>SUBMIT</Button>
            <Button className={Styles.Button}>LOGIN</Button>
            <Button className={Styles.Button2}>LOGOUT</Button>
        </div>
    )
}

export default WebButtons;