import React, { useState, useEffect } from 'react';
import './style.css';

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
        <>
            <div className='intro-flex'>
                <div className='intro-section'>
                    <h1>Hi there I am <span className='text-name'>Himanshu</span></h1>
                    <h3>
                        I'm  into <span style={{ color: 'blueviolet' }}>{text}</span>
                        {showCursor && <span className="cursor">|</span>}
                    </h3>
                    <div className="socials">
                        <ul className="social-icons">
                            <li className='no-margin'>
                                <a
                                    className="linkedin"
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/himanshusharma991009/"
                                >
                                    <i className="fab fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="github"
                                    aria-label="GitHub"
                                    href="https://github.com/himanshu99100"

                                >
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    aria-label="Twitter"
                                    href="https://twitter.com/jigar_sable"
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="telegram"
                                    aria-label="Telegram"
                                    href="https://t.me/lifecode5"

                                >
                                    <i className="fab fa-telegram-plane" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    aria-label="Instagram"
                                    href="https://www.instagram.com/jigarsable.dev"
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h3>About Me</h3>
                    <p>
                        I'm a creative Full Stack Developer who believes in the power of technology to drive innovation. With a background in design and a knack for coding, I merge aesthetics with functionality to build visually stunning and robust web applications. My experience spans various industries, and I'm always eager to take on new challenges, pushing the boundaries of what's possible in the world of Full Stack Development.
                    </p>
                </div>
                <div className='intro-img'>
                    <img
                        draggable="false"
                        className="img"
                        src='/myImage.jpg'
                        alt="_NO"
                    />
                </div>
            </div>


        </>
    );
}

export default App;
