import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

export const Hero = () => {
    const jessie = "Jessie";
    const the = "the";
    const developer = "Developer";

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };


    return (
        <main id="home">
            <div className="eighty-width hero-container">

                {/* Jessie Description */}
                <div className='hero-description'>
                    <div className="hero-desc-container">
                        <motion.h1
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                        >
                            {jessie.split('').map((char, index) => {
                                return (
                                    <motion.span
                                        className='jessie-h1'
                                        key={char + "-" + index}
                                        variants={letter}
                                    >{char}</motion.span>
                                )
                            })}
                            <br />
                            {the.split('').map((char, index) => {
                                return (
                                    <motion.span
                                        className='the-h1'
                                        key={char + "-" + index}
                                        variants={letter}
                                    >{char}</motion.span>
                                )
                            })}
                            <br />
                            {developer.split('').map((char, index) => {
                                return (
                                    <motion.span
                                        className='developer-h1'
                                        key={char + "-" + index}
                                        variants={letter}
                                    >{char}</motion.span>
                                )
                            })}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 1.5 }}
                        >Are you looking for a professional front-end developer who is obsessed with beautiful and intuitive websites and brightens up your team with positive vibes?
                            You are at the right place! Please find out more about me.
                        </motion.p>
                        <motion.div
                            className='scroll-down-container'
                            initial={{ opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 6, duration: 1}}
                        >
                            <HashLink
                                className='scroll-down'
                                smooth to="/#about-me"
                            >
                                <div className='scroll-down-mouse'>
                                    <motion.div
                                    className='scroll-down-mouse-ball'
                                    animate={{y: [5, 26, 5]}}
                                    transition={{duration: 3,
                                    repeat: Infinity,
                                    repeatType: 'loop'}} />
                                </div>
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
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 2 }} />
                    <motion.img
                        className='hero-decoration2'
                        src='/image/green-decoration.png'
                        alt="decorative element"
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 2 }} />
                    <motion.img
                        className='jessie-image'
                        src="/image/jessie-hero-image.png"
                        alt="jessie smiling"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }} />
                </div>
            </div>
        </main >
    )
}
