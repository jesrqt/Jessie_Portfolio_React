import './SkillCard.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { skillCardInfo } from './skillCardInfo';
import { useEffect } from 'react';
import { useAnimate, usePresence } from 'framer-motion';

export const SkillCard = (props) => {
    const title = skillCardInfo[props.selectedSkill].title;
    const summary = skillCardInfo[props.selectedSkill].summary;
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
        if(isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current,
                    {opacity: [0, 1]},
                    {duration: 0.5, delay: 0.3}
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
                <div
                    className='skill-card-arrow-container'
                    onClick={onLeftClick}>
                    <BiChevronLeft className='skill-card-arrow' />
                </div>
            </div>
            <div>
                <div
                    className='skill-card-panel'
                    ref={scope}>
                    <div className='skill-card-panel-left'>
                        <div className='skill-card-left-top'>
                            <h4>{title}</h4>
                            <p>{summary}</p>
                        </div>
                        <div className='skill-card-left-bottom'>
                            <h4>Mastered syntaxes</h4>
                            <ul>
                                {features.map((item, i) => {
                                    return (
                                        <li key={i}>{item}</li>
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
            </div>
            <div className='skill-card-arrow-wrapper'>
                <div
                    className='skill-card-arrow-container'
                    onClick={onRightClick}>
                    <BiChevronRight className='skill-card-arrow' />
                </div>
            </div>
        </div>
    )

}
