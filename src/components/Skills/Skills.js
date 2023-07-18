import './Skills.css'
import { skillCardInfo } from './skillCardInfo';
import { SkillCard } from './SkillCard';
import { useState } from 'react';
import { motion } from 'framer-motion';


export const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(0);

    const leftArrowClickHandler = () => {
        setSelectedSkill(prev => {
            if (prev === 0) {
                return skillCardInfo.length - 1;
            } else {
                return prev - 1;
            }
        })
    };

    const rightArrowClickHandler = () => {
        setSelectedSkill(prev => {
            if (prev === skillCardInfo.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    };

    const liVariant = {
        hidden: { opacity: 0, x: -20 },
        shown: { opacity: 1, x: 0 },
    }

    return (
        <section id="skills">
            <div className='eighty-width'>
            <div className='skill-container'>
                <div className="skills-title">
                    <h2>How Will Jessie Contribute Technically To Your Team?</h2>
                </div>
                <ul className='skill-ul'>
                    {skillCardInfo.map((item, i) => {
                        return (
                            <motion.li
                                key={i}
                                onClick={() => setSelectedSkill(i)}
                                className={`skill-li ${(selectedSkill === i) ? "skill-li-selected" : ""}`}
                                variants={liVariant}
                                initial={"hidden"}
                                whileInView={"shown"}
                                transition={{ delay: 0.4 * i, duration: 0.4 }}
                                viewport={{ once: true }}
                            >{item.title}
                            </motion.li>
                        )
                    })}
                </ul>
            </div>
            <SkillCard
                selectedSkill={selectedSkill}
                leftArrowClickHandler={leftArrowClickHandler}
                rightArrowClickHandler={rightArrowClickHandler}
            />
            </div>
        </section>
    )
}
