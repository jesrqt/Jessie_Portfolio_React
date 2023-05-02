import React from 'react'
import './Hero.css';
import { FiGithub } from 'react-icons/fi'

export const Hero = () => {
    return (
        <main>
            <div className="eighty-width hero-container">

                {/* Jessie Description */}
                <div className="hero-description">
                    <div className="hero-desc-container">
                        <h1>Hi! I'm <span className="Jessie">Jessie,</span><br />
                            <span>A Front-End Developer</span>
                        </h1>
                        <p>Welcome to my portfolio! Here, I demonstrate my technical skills as an aspiring front-end developer.</p>
                        <button className="github-button">
                            <a href="https://github.com/jesrqt">
                                <h4>Check my Github</h4>
                                <FiGithub className="github-icon"/>
                            </a>
                        </button>
                    </div>
                </div>

                {/* Jessie Image */}
                <div className="jessie-image"></div>
            </div>
        </main>
    )
}
