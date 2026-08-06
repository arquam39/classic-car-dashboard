import React from 'react'
import './CarImage.css'
import { motion, AnimatePresence } from "framer-motion";


const CarImage = ({ image }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.img
                key={image}
                src={image}

                className="car-image"
                initial={{
                    x: 300,
                    opacity: 0,
                    scale: 0.85
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                exit={{
                    x: -300,
                    opacity: 0,
                    scale: 0.85,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
            />
        </AnimatePresence>
    )
}

export default CarImage