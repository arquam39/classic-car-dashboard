import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Navbar from '../Components/NavBar/NavBar'
import Header from '../Components/Header/Header'
import cars from '../Cars/cars'


const Dashboard = () => {

    const [activeCar, setActiveCar] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const car = cars[activeCar];

    const changeCar = (direction) => {
        setActiveCar(prev => {
            if (direction === "next") {
                return Math.min(prev + 1, cars.length - 1);
            }
            else {
                return Math.max(prev - 1, 0);
            }
        })
    }
    useEffect(() => {
        const handleWheel = (e) => {
            if (scrolling) return;

            const direction =
                (e.deltaY > 0 || e.deltaX > 0)
                    ? "next"
                    : "prev";
            changeCar(direction);
            setScrolling(true);

            setTimeout(() => {
                setScrolling(false);
            }, 1200);
        }
        window.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: true
            }
        );

        return () => {
            window.removeEventListener(
                "wheel",
                handleWheel
            )
        }
    }, [scrolling]);

    return (

        <div className="dashboard">


            <Navbar color={car.color} />


            <main className="dashboard-content">

                <Header car={car} changeCar={changeCar} />

            </main>


        </div>

    )
}

export default Dashboard