import React, { Fragment, useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
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
                        <a className="menuItem" href="https://jessieinit.com/">Home</a>
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
                        <a className="menuItem" href="#blog">Blog</a>
                    </li>
                </ul>
            </Fragment>
        )
    }

}
