import React from 'react'
import { motion } from "framer-motion"
import useInView from './useInView';

function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div id='education'>
      <h3 className='headings'><i className="fas fa-graduation-cap"></i> My Education</h3>
      <section className="design-section">
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle" />
            
            <div className="timeline-circle-end" />
          </div>
          <div className=" timeline-content">
          <motion.div 
          ref={ref}
          animate={isInView ? { opacity:1,x: 0 } : {opacity:0,x:200} }
          transition={{duration:1,ease:"easeOut",delay:0.2}}
           className='education-box'>
              <h4>Bachelor of Technology in Computer Science and Engineering</h4>
              <h5>Indira Gandhi Universuty ,Meerpur</h5>
              <h6>2022 | 2025</h6>
            </motion.div>
            
          </div>
          <div className=" timeline-content">
          <motion.div
          
          animate={isInView ? { opacity:1,x: 0 } : {opacity:0,x:-200} }
          transition={{duration:1,ease:"easeOut",delay:0.2}}
           className='education-box'>
              <h4>Higher Secondary Certificate in Science </h4>
              <h5>Maharaj Aggersan Public school , Rewari</h5>
              <h6>2017 | 2020</h6>
            </motion.div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>
        </div>
      </section>

    </div>
  )
}

export default Education;
