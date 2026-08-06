import React from "react";
import "./Navbar.css";
import logo from '../../assets/logo.svg'
import { motion } from "framer-motion";




const brands = [
    "DUESENBERG",
    "MERCEDES",
    "CITROEN",
    "CHEVROLET",
    "LINCOLN",
    "CADILAC"
];


function Navbar({ color }) {

    return (

        <motion.div

            className="side-navbar"

            animate={{
                background: color
            }}

            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}

        >
            <div className="nav-logo">
                <img src={logo}></img>
            </div>


            <div className="brand-list">

                {
                    brands.map((brand) => (

                        <div
                            className="brand"
                            key={brand}
                        >
                            {brand}
                        </div>

                    ))
                }


            </div>


        </motion.div>

    )

}


export default Navbar;