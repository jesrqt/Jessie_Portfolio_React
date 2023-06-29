import React from 'react';
import { Fragment } from 'react';
import { Hero } from '../Hero/Hero';
import { AboutMe } from '../AboutMe/AboutMe';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';


export const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
        </Fragment>
    )
}
