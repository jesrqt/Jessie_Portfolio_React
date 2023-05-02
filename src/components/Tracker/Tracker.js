import React, { useEffect, useState } from 'react'
import './Tracker.css';

export const Tracker = () => {
    const [studyDays, setStudyDays] = useState('');
    const [cupsOfCoffee, setCupsOfCoffee] = useState('');

    useEffect(() => {
        // Set number of Study Days
        const today = Date.now();
        const startDate = new Date(2022, 10, 14);
        const numOfStudyDays = Math.floor((today - startDate)/(1000*60*60*24));
        setStudyDays(numOfStudyDays);
        // Set cups of coffee consumed
        const numOfCoffee = numOfStudyDays * 2;
        setCupsOfCoffee(numOfCoffee);

    }, []);


    return (
        <div className="tracker-section">
            <div className="eighty-width tracker-container">
                <div className="tracker study-days">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <div className="tracker-description">
                        <h3 id="studyDays">{studyDays}</h3>
                        <p>days studying to code</p>
                    </div>
                </div>
                <div className="tracker cups-of-coffee">
                    <i className="fa fa-coffee" aria-hidden="true"></i>
                    <div className="tracker-description">
                        <h3 id="cupsOfCoffee">{cupsOfCoffee}</h3>
                        <p>cups of coffee</p>
                    </div>
                </div>
                <div className="tracker no-of-projects">
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <div className="tracker-description">
                        <h3 id="numberOfProjects">3</h3>
                        <p>projects published</p>
                    </div>
                </div>
                <div className="tracker prof-experience">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                    <div className="tracker-description">
                        <h3 id="yearsOfExper">3.5</h3>
                        <p>years of professional experiences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
