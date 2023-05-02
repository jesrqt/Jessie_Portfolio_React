import React, { useState } from 'react'
import { SkillCard } from './SkillCard';
import './Skills.css'

export const Skills = () => {
    const [isHtmlVisible, setIsHtmlVisible] = useState(false);
    const [isCssVisible, setIsCssVisible] = useState(false);
    const [isJsVisible, setIsJsVisible] = useState(false);
    const [isReactVisible, setIsReactVisible] = useState(false);
    const [isReduxVisible, setIsReduxVisible] = useState(false);
    const [isGitVisible, setIsGitVisible] = useState(false);

    const htmlClickHandler = () => {
        setIsHtmlVisible(prev => !prev);
    };

    const cssClickHandler = () => {
        setIsCssVisible(prev => !prev);
    };

    const jsClickHandler = () => {
        setIsJsVisible(prev => !prev);
    };

    const reactClickHandler = () => {
        setIsReactVisible(prev => !prev);
    };

    const reduxClickHandler = () => {
        setIsReduxVisible(prev => !prev);
    };

    const gitClickHandler = () => {
        setIsGitVisible(prev => !prev);
    };

    return (
        <section id="skills">
            <div className="title skills-title">
                <h2>Skills</h2>
            </div>
            <div className="skill-card-container">
                <div className="eighty-width skills-container">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <div 
                    className="html boxshadow skills"
                    onClick={htmlClickHandler}>
                        <img class="skill-logo" id="html-logo" src="./image/Logo_HTML.png" alt="HTML5 logo" />
                    </div>
                    <div className="css boxshadow skills"
                    onClick={cssClickHandler}>
                        <img className="skill-logo" id="css-logo" src="./image/Logo_CSS.png" alt="CSS logo" />
                    </div>
                    <div class="js boxshadow skills"
                    onClick={jsClickHandler}>
                        <img className="skill-logo" src="./image/Logo_JavaScript.png" alt="JavaScript logo" />
                    </div>
                    <div className="react boxshadow skills"
                    onClick={reactClickHandler}>
                        <img className="skill-logo" src="./image/Logo_React.png" alt="React logo" />
                    </div>
                    <div className="redux boxshadow skills"
                    onClick={reduxClickHandler}>
                        <img className="skill-logo" src="./image/Logo_Redux.png" alt="Redux logo" />
                    </div>
                    <div className="git boxshadow skills"
                    onClick={gitClickHandler}>
                        <img className="skill-logo" id="git-logo" src="./image/Logo_Git.png" alt="Git logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
