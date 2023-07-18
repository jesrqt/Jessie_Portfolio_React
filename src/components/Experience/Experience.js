import React from 'react'
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceDescription } from './experienceDescription';

export const Experience = () => {
    return (
        <section id='experience' >
            <div className='eighty-width'>
                <div className='experience-title-container'>
                    <h2>What Jessie Has Experienced So Far</h2>
                    <p>*Please request full details in person</p>
                </div>
                <VerticalTimeline
                    lineColor='#2a3e52'
                >
                    <VerticalTimelineElement
                        contentStyle={{ background: "#fce5d4", color: "#2a3e52", borderRadius: "10px", padding: "1.5rem 2.5rem", boxShadow: "0 0 15px rgba(165, 229, 226, 0.5)" }}
                        contentArrowStyle={{ borderRight: '7px solid #fce5d4' }}
                        date={experienceDescription[0].year}
                        iconStyle={{ background: '#fce5d4', color: '#2a3e52', }}
                        icon={experienceDescription[0].icon}
                    >
                        <h4>{experienceDescription[0].title}</h4>
                        <h5>{experienceDescription[0].place}</h5>
                        <ul>
                            {experienceDescription[0].description.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: "#c4dea5", color: "#2a3e52", borderRadius: "10px", padding: "1.5rem 2.5rem", boxShadow: "0 0 15px rgba(165, 229, 226, 0.5)" }}
                        contentArrowStyle={{ borderRight: '7px solid #c4dea5' }}
                        date={experienceDescription[1].year}
                        iconStyle={{ background: '#c4dea5', color: '#2a3e52', }}
                        icon={experienceDescription[1].icon}
                    >
                        <h4>{experienceDescription[1].title}</h4>
                        <h5>{experienceDescription[1].place}</h5>
                        <ul>
                            {experienceDescription[1].description.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: "#c4dea5", color: "#2a3e52", borderRadius: "10px", padding: "1.5rem 2.5rem", boxShadow: "0 0 15px rgba(165, 229, 226, 0.5)" }}
                        contentArrowStyle={{ borderRight: '7px solid #c4dea5' }}
                        date={experienceDescription[2].year}
                        iconStyle={{ background: '#c4dea5', color: '#2a3e52', }}
                        icon={experienceDescription[2].icon}
                    >
                        <h4>{experienceDescription[2].title}</h4>
                        <h5>{experienceDescription[2].place}</h5>
                        <ul>
                            {experienceDescription[2].description.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: "#fce5d4", color: "#2a3e52", borderRadius: "10px", padding: "1.5rem 2.5rem", boxShadow: "0 0 15px rgba(165, 229, 226, 0.5)" }}
                        contentArrowStyle={{ borderRight: '7px solid #fce5d4' }}
                        date={experienceDescription[3].year}
                        iconStyle={{ background: '#fce5d4', color: '#2a3e52', }}
                        icon={experienceDescription[3].icon}
                    >
                        <h4>{experienceDescription[3].title}</h4>
                        <h5>{experienceDescription[3].place}</h5>
                        <ul>
                            {experienceDescription[3].description.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    )
}
