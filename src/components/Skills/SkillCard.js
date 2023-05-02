import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react';

export const SkillCard = (props) => {
    const [flip, setFlip] = useState(false);
    const flipHandler = () => {
        setFlip(!flip);
    };

    return (
        <ReactCardFlip
            isFlipped={flip}
            flipDirection="horizontal"
        >
            <div
                className={props.divClassName}
                onClick={flipHandler}
            >
                <img
                    className={props.imgClassName}
                    id={props.imgId}
                    src={props.imgSrc}
                    alt={props.imgAlt} />
            </div>
            <div onClick={flipHandler}>
                <ul>
                    {props.skillDesc.map(desc => <li>{desc}</li>)}
                </ul>
            </div>
        </ReactCardFlip>
    )
}
