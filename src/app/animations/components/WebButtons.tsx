import {motion, AnimatePresence} from 'framer-motion'
import Styles from './styles/webbuttons.module.scss'
import {Row, Col, Dropdown, Button} from 'react-bootstrap'

// create a variant that has initial as a default but can add additional properties.
type Variant = {
    initial: Object,
    transition: Object,
} & {
    [key: string]: any
}
type VariantWithoutUnwantedProperty = Omit<Variant, 'transition'>

const WebButtons = () =>{
    const variantsForMainMotionDiv : VariantWithoutUnwantedProperty ={
        initial : {opacity: 0, boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.25)'},
        animate: {opacity: 1},
        whileHover: {
            scale: 1.2,
            boxShadow: '5px 10px 10px 0px rgba(0, 0, 0, 0.25)',
            transition: { duration: 1 },
        }
    }

    const variantsForButtonText: VariantWithoutUnwantedProperty = {
        initial: {color: '#B4A24B'},
        hover: {color: '#fff'}
    }

    return (
        <div className={Styles.MainDiv}>
            <motion.div
                className={Styles.MotionDivButton}
                initial="initial"
                animate="animate"
                transition={{ ease: "easeIn", duration: 1 }}
                whileHover="whileHover"
                variants={variantsForMainMotionDiv}
            >
                <Button className={Styles.Button}>
                    <motion.div 
                        initial="initial"
                        whileHover="hover"
                        variants={variantsForButtonText}
                        transition={{ duration: 1 }}
                    >
                        SIGNUP
                    </motion.div>
                </Button>
            </motion.div>
           
            <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
            >
                <Button className={Styles.Button}>LOGIN</Button>
            </motion.div>

            <Button className={Styles.Button2}>LOGOUT</Button>
        </div>
    )
}

export default WebButtons;