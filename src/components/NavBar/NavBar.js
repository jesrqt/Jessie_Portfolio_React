import React from 'react'
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav>
            <div className="eighty-width nav-container">
                <a href="https://jessieinit.com/" id="logo">{'>'}_Jessie_in_IT</a>
                <ul>
                    <li>
                        <a className="nav-link" href="https://jessieinit.com/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
