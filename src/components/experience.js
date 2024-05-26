import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from './useInView';

function Experience() {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <div id='experience'>
            <h3 className='headings'><i className="fas fa-briefcase" /> Experience</h3>
            <motion.div
                ref={ref}
                className='experience-container'
                initial={{ x: 300 }}
                animate={isInView ? { x: 0 } : { x: 200 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div className='experience-box'>
                    <h5>Webifly Solution</h5>
                    <h6>Full Stack Developer Intern</h6>
                    <h2>June 2023 - Sept. 2023</h2>
                    <ul>
                        <li>Developed administrative and doctor panels for a Hospital Management System.</li>
                        <li>Worked with PHP, JavaScript, Ajax, Bootstrap, and MySQL technologies.</li>
                        <li>Implemented functionalities for doctors, enabling them to access and update patient information.</li>
                        <li>Designed and implemented user authentication for secure access to the admin and doctor panel</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

export default Experience;
