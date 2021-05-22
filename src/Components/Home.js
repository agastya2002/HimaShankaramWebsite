import React from 'react'
import Objectives from './Objectives.js'
import '../css/Home.css'
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animations';


function Home() {
  return (
    <motion.div
    initial='out'
    animate='in'
    exit='out'
    variants={animationTwo}
    transition={transition}
  >
      <div id="home" className="home">
          <section>
            <h1>HIMA SHANKARAM CHARITABLE TRUST</h1>
          </section>
      </div>
      <Objectives />
    </motion.div>
  )
}

export default Home;
