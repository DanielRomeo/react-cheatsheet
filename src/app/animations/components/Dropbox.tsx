'use client'
import {motion, AnimatePresence} from 'framer-motion'
import Styles from './styles/dropbox.module.scss'
import { useState } from 'react'
import {Row, Col, Dropdown} from 'react-bootstrap'

// Variants are a set of predefined targets.
const VariantForHover = {
    whileHover: {
        scale: 1.3
    },
    initial: true
}

const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

const Dropbox = () =>{

    return (
        <div>
            <Row className={Styles.Row}>
                <Col className={Styles.Col}>
                    <motion.div 
                        className={Styles.BoxOne}
                        initial={true}
                        animate={{x: [null, 100, 0], y: [null, 100, 0]}}
                        transition={{
                            duration: 3
                        }}

                        // whileHover="whileHover"

                        // variants={VariantForHover}
                    >
                        water
                    </motion.div>
                </Col>

                <Col className={Styles.Col}>
                    <Dropdown>
                        <Dropdown.Toggle className={Styles.ButtonToggle} variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={list}
                        >
                            <Dropdown.Menu className={Styles.Menu}>
                                <motion.li variants={item}> <Dropdown.Item href="#/action-1">C++ </Dropdown.Item> </motion.li>
                                <motion.li variants={item}> <Dropdown.Item href="#/action-1">Python </Dropdown.Item> </motion.li>
                                <motion.li variants={item}> <Dropdown.Item href="#/action-1">Javascript </Dropdown.Item> </motion.li>
                            </Dropdown.Menu>
                        </motion.ul>
                    </Dropdown>
                </Col>
                
            </Row>

           
        </div>
    )
}

export default Dropbox;