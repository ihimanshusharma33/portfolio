import React from 'react';
import './style.css';

export default function Nav() {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='nav-left'>
                    <h3>Himanshu Sharma</h3>
                </div>
                <div className='nav-right'>
                    <ul>
                    <li className='active'>Home</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Work</li>
                    <li>Experience</li>
                    <li>Contact</li>
                    </ul>
                </div>
                <div className='nav-menu'>
                <i class="fa-solid fa-bars"></i>
                </div>

            </nav>

        </div>
    )
}
