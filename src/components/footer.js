import React from 'react'
import data from './data.json'
function Footer() {
    return (
        <footer className="footer">
            <div >
                <h3 className='or-color'>Himanshu's Portfolio</h3>
                <p>
                    Thank you for visiting my personal portfolio website. Connect with me
                    over socials. let's Connect.
                </p>
                <div className='footer-icons'>
                        {data.intro.socialLinks.map((item,index)=>(
                            <a className={item.platform} target='_blank' href={item.url} key={index}>
                                <i className={item.iconClass}></i>
                            </a>
                        ))}
                    </div>
            </div>
            <div >
                <h3>contact info</h3>
                <p>
                    <i className="fas fa-phone" />
                    {" "} +91 70827-11224
                </p>
                <p>
                    <i className="fas fa-envelope" />
                    {" "} himanshu99100@gmail.com
                </p>
                <p>
                    <i className="fas fa-map-marked-alt" />
                    {" "} Rewari,Haryana ,India
                </p>

            </div>
        </footer>
    )
}

export default Footer
