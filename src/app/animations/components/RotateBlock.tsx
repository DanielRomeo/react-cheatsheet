'use client'
import {motion} from 'framer-motion'
import Styles  from './styles/rotate.module.scss'


const RotateBlock = ()=>{
    return (
        <div>
            <h1>Hello world!</h1>
            <motion.div className={Styles.BlockOne} animate={{x: 100}}></motion.div>
        </div>
    )
}

export default RotateBlock;