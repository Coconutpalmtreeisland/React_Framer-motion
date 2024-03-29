import React from 'react'
import { motion } from 'framer-motion'

const Section02 = () => {
    return (
        <section id='section02' className='react__item'>
            <span className='num'>02. Gestures</span>
            <motion.div
                className='circle'
                // 마우스 오버
                whileHover={{
                    scale: 0.6,
                    borderRadius: "10px",
                    rotate: 180,
                }}
                // 마우스 클릭
                whileTap={{
                    scale: 1.6,
                    rotate: -180,
                    borderRadius: "0%",
                }}
            ></motion.div>
        </section>
    )
}

export default Section02