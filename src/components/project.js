import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import data from './data.json';
import './project.css';
import useInView from './useInView';
function Project() {
    const [selectedId, setSelectedId] = useState(null);
    const selectedItem = data.projects.find(item => item.id === selectedId);
    const [ref, isInView] = useInView({ threshold: 0.1 });;
        useEffect(() => {
            const handleScroll = () => {
                const progress = window.scrollY ;
                if (progress) {
                    setSelectedId(null)
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []); 
    return (
        <>
            <div id='projects'>
                <h3 className='headings'><i className="ic fas fa-laptop-code" /> Project</h3>
                <div className='project-container'>
                {data.projects.map((item, index) => (
                        <motion.div 
                        ref={ref}
                            className='project-item'
                            key={item.id}
                            layoutId={item.id}
                            onClick={() => setSelectedId(item.id)}
                             animate={isInView ? { x: 0 } : (index % 2 === 0 ? { x: 200 } : { x: -200 })}
                        >
                            <motion.h4>{item.title}</motion.h4>
                            <motion.h5>Tech Stack :{item.technologies}</motion.h5>
                            <motion.p>Tap to know More.</motion.p>
                        </motion.div>
                    ))}
                    <AnimatePresence>
                        {selectedId && selectedItem  && (
                            <motion.div 
                            layoutId={selectedId} 
                            className='project-details'
                            initial={{ opacity: 0, y: 50 }} // Initial animation values
                                animate={{ opacity: 1, y: 0 }} // Animation when component is present
                                exit={{ opacity: 0, y: -50 }} // Animation when component exits
                                transition={{ duration: 0.5 }} // Animation duration
                            >
                                <motion.button onClick={() => setSelectedId(null)}><i className="fa-solid fa-xmark"></i></motion.button>
                                <motion.h2>{selectedItem.title}</motion.h2>
                                <motion.h5>{selectedItem.subtitle}</motion.h5>
                                <motion.p>{selectedItem.description}</motion.p>
                                <motion.a href={selectedItem.link} target='_blank'>Hosting Link</motion.a>
                                <motion.a href={selectedItem.code} target='_blank' >Code Link</motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}

export default Project;
