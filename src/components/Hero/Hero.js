import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

export const Hero = () => {
    return (
        <main id="home">
            <div className="eighty-width hero-container">

                {/* Jessie Description */}
                <div className="hero-description">
                    <div className="hero-desc-container">
                        <h1>
                            <span className='jessie-h1'>Jessie</span><br />
                            <span className='the-h1'>the</span> <br />
                            <span className='developer-h1'>Developer</span>
                        </h1>
                        <p>Are you looking for a professional front-end developer who is obsessed with beautiful and intuitive websites and brightens up your team with positive vibes?
                            You are at the right place! Please find out more about me.
                        </p>
                        <motion.div
                            className='scroll-down-container'
                            animate={{
                                scale: [1.5, 1, 1.5, 1, 1.5, 1],
                             }}
                            transition={{duration: 3, delay: 0.5}}
                            whileHover={{ scale: 1.5, transition: {duration: 0.2} }}>
                            <HashLink
                                className='scroll-down'
                                smooth to="/#about-me"
                            >
                                <BsChevronDoubleDown />
                            </HashLink>
                        </motion.div>
                    </div>
                </div>

                {/* Jessie Image */}
                <div className="jessie-image-container">
                    <motion.img
                        className='hero-decoration1'
                        src='/image/green-decoration.png'
                        alt="decorative element"
                        aria-hidden="true" />
                    <motion.img
                        className='hero-decoration2'
                        src='/image/green-decoration.png'
                        alt="decorative element"
                        aria-hidden="true" />
                    <img
                        className='jessie-image'
                        src="/image/jessie-hero-image.png"
                        alt="jessie smiling" />

                </div>
            </div>
        </main >
    )
}
