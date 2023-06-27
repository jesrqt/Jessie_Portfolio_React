import React, { useState, Fragment } from 'react';
import './AboutMe.css';
import { BiChevronDown } from 'react-icons/bi'
import { AnimatePresence, motion } from 'framer-motion';


export const Accordion = (props) => {
    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <div
                key={props.id}
                className='about-me-title-container'
                onClick={() => setShow(!show)}
            >
                <div className='about-me-title-wrapper'>
                    <div className='about-me-icon'>{props.icon}</div>
                    <h3>{props.title}</h3>
                </div>
                <BiChevronDown className={`about-me-expansion ${show ? "about-me-rotate" : ""}`} />
            </div>
            <AnimatePresence>
                {
                    show && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}>
                            <motion.p
                                className='about-me-p'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >{props.description}</motion.p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </Fragment>
    )
}
