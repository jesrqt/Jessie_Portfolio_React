import React, { Fragment, useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const getIsHamburger = () => window.innerWidth <= 1000;

export const NavBar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isHamburgerMenu, setIsHamburgerMenu] = useState(getIsHamburger())

    useEffect(() => {
        const onResize = () => {
            setIsHamburgerMenu(getIsHamburger())
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    if (!isHamburgerMenu) {
        return (
            <nav>
                <div className="eighty-width nav-container">
                    <NavLink to="/" id="logo">{'>'}_Jessie_in_IT</NavLink>
                    <ul>
                        <li>
                            <NavLink className="nav-link" to="/">Home</NavLink>
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
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    if (isHamburgerMenu) {
        return (
            <Fragment>
                <nav>
                    <div className="eighty-width nav-container">
                        <a href="https://jessieinit.com/" id="logo">{'>'}_Jessie_in_IT</a>
                        <button 
                        className="hamburger"
                        onClick={toggleMenu}>
                            {!isMenuVisible
                                ? <GiHamburgerMenu
                                    className="menuIcon"
                                />
                                : <GrClose
                                    className="closeIcon"
                                />
                            }
                        </button>
                    </div>
                </nav>

                <ul className={`menu ${isMenuVisible && "showMenu"}`}>
                    <li>
                        <NavLink className="menuItem" to="/">Home</NavLink>
                    </li>
                    <li>
                        <a className="menuItem" href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a className="menuItem" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className="menuItem" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="menuItem" href="#projects">Projects</a>
                    </li>
                    <li>
                        <NavLink className="menuItem" to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </Fragment>
        )
    }

}
