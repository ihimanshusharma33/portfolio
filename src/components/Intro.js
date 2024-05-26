import React, { useState, useEffect } from 'react';
import './style.css';
import data from './data.json'
import { motion } from 'framer-motion'

function App() {
    const [text, setText] = useState('');
    const words = ['Web Development', 'Frontend Development', 'Backend Develoment'];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
   

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (!isDeleting) {
                if (charIndex < words[wordIndex].length) {
                    setText((prevText) => prevText + words[wordIndex][charIndex]);
                    setCharIndex((prevIndex) => prevIndex + 1);
                    setShowCursor(false);
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (charIndex > 0) {
                    setText((prevText) => prevText.slice(0, -1));
                    setCharIndex((prevIndex) => prevIndex - 1);
                } else {
                    setIsDeleting(false);
                    // Move to the next word and reset character index
                    setCharIndex(0);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, 200); // Adjust the typing speed as needed

        return () => {
            clearInterval(typingEffect);
        };
    }, [charIndex, wordIndex, isDeleting]);
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight, // Scrolls down by one viewport height
            behavior: 'smooth',      // Smooth scrolling
        });
    };
    // Function to toggle cursor visibility (blink effect)
    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 200); // Adjust the blinking speed as needed

        return () => {
            clearInterval(cursorBlink);
        };
    }, []);

    return (
        <div className='container'>
            <div className='intro-flex' id="home" >
                <div className='intro-section'>
                    <h1>Hi there! I'm <span className='text-name'>Himanshu Sharma</span></h1>
                    <h3>
                        I'm  into <span style={{ color: '#F97300' }}>{text}</span>
                        {showCursor && <span className="cursor">|</span>}
                    </h3>
                    <div className='social-icons'>
                        {data.intro.socialLinks.map((item, index) => (
                            <a className={item.platform} target='_blank' href={item.url} key={index}>
                                <i className={item.iconClass}></i>
                            </a>
                        ))}
                    </div>
                    <div className='intro-lines' style={{ width: "30rem" }}>
                        I'm a passionate software developer with expertise in frontend and backend technologies like React, PHP, Node.js, MySQL, MongoDB, and others. If you have any projects that require my skills, don't hesitate to contact me.
                    </div>
                </div>

                <div

                    className='intro-img' >
                    <motion.img
                       animate={{ x: 100 }}
                       transition={{
                           ease: "linear",
                           duration: 2,
                           x: { duration: 1 }
                         }}
                        draggable="false"
                        className="img"
                        src='/myImage.jpg'
                        alt="_NO"
                    />
                </div>
            </div>
            <div className='center'>
                <button className='scroll-button'
                    onClick={handleScrollDown}
                >
                    <i   className=" fa-solid fa-arrow-down"></i>
                </button>
            </div>



        </div>
    );
}

export default App;
