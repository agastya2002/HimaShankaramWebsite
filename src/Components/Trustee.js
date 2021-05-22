import React from 'react'
import '../css/Trustee.css'
import { motion } from 'framer-motion';
import { animationOne, transition2 } from '../animations';

function trustee({img, name, sub}) {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition2}
      className="trustee"
    >
      <img className="trusteeImg" src={img} alt="" />
      <h3>{name}<br/>{sub}</h3>
    </motion.div>
  )
}


export default trustee

