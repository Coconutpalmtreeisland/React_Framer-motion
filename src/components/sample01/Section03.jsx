import React from 'react'
import { motion } from 'framer-motion'

const Section03 = () => {
    return (
        <section id='section03' className='react__item'>
            <span className='num'>03. keyframes</span>
            <motion.div
                className='circle'
                animate={{
                    scale: [1, 2, 0.5, 2.5, 1],
                    borderRadius: ["50%", "0%", "50%", "0%", "50%"],
                    rotate: [0, 0, 180, 180, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            ></motion.div>
        </section>
    )
}

export default Section03