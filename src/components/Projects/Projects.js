import React from 'react';
import './Projects.css';
import { Button } from '../../UI/Button';

export const Projects = () => {
    return (
        <section id="projects">
            <div className="title project-title">
                <h2>Projects</h2>
            </div>
            <div className="project-section">
                <div className="eighty-width boxshadow slide-container">
                    <div className="slide-content">
                        <div className="card-wrapper">

                            <div className="boxshadow card">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="card-image">
                                        <img src="../../../image/Project_Purrcolator.png"
                                            alt="Web development project for an imaginary cat cafe called Purrcolator" className="card-img" />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3 className="project-name">Puurcolator</h3>
                                    <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
                                        reiciendis ducimus, fugit nobis consequatur laborum mollitia quod.</p>
                                    <Button
                                        className="basic-button view-more-button"
                                        href="#"
                                    >View More</Button>
                                </div>
                            </div>

                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="card-image">
                                        <img src="../../../image/Project_Fotomatic.png"
                                            alt="Web development project for an imaginary cat cafe called Purrcolator" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="project-name">Fotomatic</h3>
                                    <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
                                        reiciendis ducimus, fugit nobis consequatur laborum mollitia quod.</p>

                                    <Button
                                        className="basic-button view-more-button"
                                        href="#"
                                    >View More</Button>
                                </div>
                            </div>

                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="card-image">
                                        <img src="../../../image/Project_CSS_Visual_Rules.png"
                                            alt="Web development project for an imaginary cat cafe called Purrcolator" className="card-img" />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3 className="project-name">CSS Visual Rules</h3>
                                    <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
                                        reiciendis ducimus, fugit nobis consequatur laborum mollitia quod.</p>
                                    <Button
                                        className="basic-button view-more-button"
                                        href="#"
                                    >View More</Button>
                                </div>
                            </div>

                            <div className="card">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="card-image">
                                        <img src="../../../image/Project_Tea_Cozy.png"
                                            alt="Web development project for an imaginary cat cafe called Purrcolator" className="card-img" />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3 className="project-name">Tea Cozy</h3>
                                    <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
                                        reiciendis ducimus, fugit nobis consequatur laborum mollitia quod.</p>
                                    <Button
                                        className="basic-button view-more-button"
                                        href="#"
                                    >View More</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
