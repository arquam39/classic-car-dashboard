import React from 'react'
import './Vectors.css'
import vectors from './HeaderVector'

const Vectors = () => {

    return (
        <div className="vectors">
            <img
                src={vectors.lines}
                className="vector lines"
            />
            <img
                src={vectors.chevrolet}
                className="vector chevrolet"
            />
            <img
                src={vectors.decoreline1}
                className="vector decore1"
            />
            <img
                src={vectors.numbers}
                className="vector numbers"
            />
            <img
                src={vectors.p1}
                className="vector p1"
            />
            <img
                src={vectors.p2}
                className="vector p2"
            />
            <img
                src={vectors.titleRight}
                className="vector titleRight"
            />
            <img
                src={vectors.bottomline}
                className="vector bottomline"
            />
            <img
                src={vectors.decoreline2}
                className="vector decoreline2"
            />
            <img
                src={vectors.scrolldown}
                className="vector scrolldown"
            />
            <img
                src={vectors.topline}
                className="vector topline"
            />
        </div>
    )
}

export default Vectors