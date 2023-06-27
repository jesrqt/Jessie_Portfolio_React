import React from 'react';
import './AboutMe.css';
import { jessieDescription } from './jessieDescription';
import { Accordion } from './Accordion';
import { motion } from 'framer-motion';

export const AboutMe = () => {

    const childVariant = {
        hidden: { x: -100, opacity: 0 },
        shown: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    };


    return (
        <section className='about-me-wrapper'>
            <h2 className='about-me-h2'>Why Will Jessie Benefit Your Team?</h2>
            <motion.div
                className='about-me-accordion'
                transition={{ staggerChildren: 0.7, delay: 1 }}
                initial={"hidden"}
                whileInView={"shown"}
                viewport={{ once: true }}
            >
                {jessieDescription.map((item) => {
                    return (
                        <motion.div
                            key={item.id}
                            className={`${item.class} about-me-card`}
                            variants={childVariant}
                        >
                            <Accordion
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}