import React from 'react'
import './Header.css'
import { motion, AnimatePresence } from "framer-motion";
import CarImage from '../CarImage/CarImage';
import Vectors from '../HeaderVector/Vectors';

const Header = ({car, changeCar}) => {
    return (
        <div className='header-content' style={{
            background: `
            radial-gradient(
                ellipse 50% 50% at center,
                rgba(255, 255, 255, 0.5) 20%,
                rgba(255, 255, 255, 0.5) 30%,
                transparent 100%
            ),${car.color}`}} onClick={()=>changeCar("next")}>

            {/* <div className='name'>{brand}</div> */}
            <Vectors />
            <CarImage image={car.image} />
        </div>
    )
}

export default Header