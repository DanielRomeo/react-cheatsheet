'use client'
import {motion, AnimatePresence} from 'framer-motion'
import Styles  from './styles/rotate.module.scss'
import { useState } from 'react'


const RotateBlock = ()=>{

    const [animationInitial, setAnimationInitial] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    return (
        <div>
            <motion.div 
                className={Styles.BlockOne} 
                initial={true}
                animate={{
                    x: [null, 100, 200, 0],
                    y: [null, 40,50,0]
                }}
               
                transition={{
                    ease: 'easeOut',
                    duration: 1
                }}
                >
                <h1>Hello world!</h1>
            </motion.div>

            {/* Remove elements from screen upon clicking on them */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                    onClick={()=>{
                        if(isVisible){
                            return setIsVisible(!isVisible)
                        }else{
                            return setIsVisible(!isVisible)
                        }
                }}
                    className={Styles.BlockOne}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            <motion.div 
                className={Styles.BlockOne} 
                // initial={false}
                // animate={{x: 300}}
                // transition={{
                //     ease: 'easeOut',
                //     duration: 2
                // }}
                >
                <h1>Third box!</h1>
            </motion.div>

                {/*  For some reason, the circle does not work */}
            {/* <motion.circle
                className={Styles.BlockOne} 
                cx={500}
                animate={{
                    cx: [null, 100, 200],
                    
                }}
                transition={{ duration: 3, times: [0, 0.2, 1] }}
            
            >
            </motion.circle> */}

                <motion.button
                className={Styles.BlockButton} 
                initial={{ opacity: 0.1 }}
                whileHover={{
                    opacity: 1,
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                // whileInView={{ opacity: 1 }}
                />
        </div>
    )
}

export default RotateBlock;