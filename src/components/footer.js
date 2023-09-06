import React from 'react'

function Footer() {
    return (
        <div>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Himanshu's Portfolio</h3>
                        <p>
                            Thank you for visiting my personal portfolio website. Connect with me
                            over socials. <br /> <br /> 
                        </p>
                        <div className="share">
                        <a
                                    className="fa-brands fa-linkedin"
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/himanshusharma991009/"

                                />
                           <a
                                    className="fa-brands fa-github"
                                    aria-label="GitHub"
                                    href="https://github.com/himanshu99100"

                                />
                            <a
                                href="mailto:hs991009@gmail.com"
                                className="fas fa-envelope"
                                aria-label="Mail"
                                target="_blank"
                            />
                            <a
                                href="https://twitter.com/hs991009"
                                className="fab fa-twitter"
                                aria-label="Twitter"
                                target="_blank"
                            />
                            <a
                                href="https://t.me/hs991009"
                                className="fab fa-telegram-plane"
                                aria-label="Telegram"
                                target="_blank"
                            />
                        </div>
                    </div>
                    <div className="box box-1">
                        <h3>Quick links</h3>
                        <a href="#home">
                            <i className="fas" /> home
                        </a>
                        <a href="#about">
                            <i className="fas" /> about
                        </a>
                        <a href="#skills">
                            <i className="fas" /> skills
                        </a>
                        <a href="#education">
                            <i className="fas" /> education
                        </a>
                        <a href="#work">
                            <i className="fas" /> work
                        </a>
                        <a href="#experience">
                            <i className="fas" /> experience
                        </a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <p>
                            {" "}
                            <i className="fas fa-phone" />
                            +91 70827-11224
                        </p>
                        <p>
                            {" "}
                            <i className="fas fa-envelope" />
                            himanshu99100@gmail.com
                        </p>
                        <p>
                            {" "}
                            <i className="fas fa-map-marked-alt" />
                            Rewari,Haryana ,India
                        </p>
                      
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
