'use client'
import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const ColorChangeButton = ({ buttonText, children}: PropsWithChildren<any> | {buttonText: String}) => {
  const textVariants = {
    initial: { color: 'black' }, // initial text color
    hover: { color: 'blue' },     // color on hover
    pressed: { color: 'red' },    // color when pressed
  };

  return (
    <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="pressed"
        variants={textVariants}
        transition={{ duration: 0.3 }}
        style={{
            fontSize: '16px',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
        }}
        >
            {buttonText} {children}
    </motion.button>
  );
};



export default ColorChangeButton;