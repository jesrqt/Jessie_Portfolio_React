import React from 'react'
import './Button.css';

export const Button = (props) => {
    return (
        <button className={props.className}>
            <a href={props.href}>{props.children}</a>
        </button>
    )
}
