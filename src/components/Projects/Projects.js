import React from 'react';
import { Button } from '../../UI/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";
import './Projects.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";


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
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                coverflowEffect={{
                                  rotate: 50,
                                  stretch: 0,
                                  depth: 100,
                                  modifier: 1,
                                  slideShadows: false,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
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
                                                href="/"
                                            >View More</Button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                href="/"
                                            >View More</Button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                href="/"
                                            >View More</Button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
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
                                                href="/"
                                            >View More</Button>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
