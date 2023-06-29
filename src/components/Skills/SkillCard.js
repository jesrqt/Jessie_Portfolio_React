import './SkillCard.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { skillCardInfo } from './skillCardInfo';
import { useEffect } from 'react';
import { useAnimate, usePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export const SkillCard = (props) => {
    const title = skillCardInfo[props.selectedSkill].title;
    const features = skillCardInfo[props.selectedSkill].features;
    const image = skillCardInfo[props.selectedSkill].image;

    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    const onLeftClick = () => {
        props.leftArrowClickHandler();
    };

    const onRightClick = () => {
        props.rightArrowClickHandler();
    }

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current,
                    { opacity: [0, 1] },
                    { duration: 0.5, delay: 0.3 }
                )
            }
            enterAnimation();
        } else {
            safeToRemove();
        }
    }, [props.selectedSkill])


    return (
        <div className='skill-card-container'>
            <div className='skill-card-arrow-wrapper'>
                <motion.div
                    className='skill-card-arrow-container'
                    onClick={onLeftClick}
                    whileHover={{backgroundColor:"#c4dea5"}}
                    transition={{delay: 0.1, duration: 0.2}} >
                    <SlArrowLeft className='skill-card-arrow' />
                </motion.div>
            </div>

            <div
                className='skill-card-panel'
                ref={scope}>
                <div className='skill-card-panel-left'>
                    <div className='skill-card-left-content'>
                        <h4>{`${title} skills`}</h4>
                        <ul>
                            {features.map((item, i) => {
                                return (
                                    <li
                                        key={i}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='skill-card-img-container'>
                    <img src={image} alt="logo of the programming language" />
                </div>
                <div className='skill-card-panel-right'></div>
            </div>

            <div className='skill-card-arrow-wrapper'>
                <motion.div
                    className='skill-card-arrow-container'
                    onClick={onRightClick}
                    whileHover={{backgroundColor:"#c4dea5"}}
                    transition={{delay: 0.1, duration: 0.2}}>
                    <SlArrowRight className='skill-card-arrow' />
                </motion.div>
            </div>
        </div>
    )

}
