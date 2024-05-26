import React ,{useState}from 'react';
import './style.css';
import { Link as ScrollLink } from 'react-scroll';

export default function Nav() {
    const [activeLink, setActiveLink] = useState('');
    const handleSetActive = (to) => {
        setActiveLink(to);
    };
    return (
        <div>
            <nav className='nav-bar'>
                <h3>Himanshu Sharma</h3>
                <ul>
                    <li>
                        <ScrollLink 
                        className={activeLink === 'home' ? 'bg-nav active' : 'bg-nav'}
                        onClick={()=>handleSetActive('home')} 
                         to='home' duration={500} offset={-100}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                         className={activeLink === 'skills' ? 'bg-nav active' : 'bg-nav'}
                         to='skills'
                         onClick={()=>handleSetActive('skills')}   duration={500} offset={-100}>Skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        className={activeLink === 'projects' ? 'bg-nav active' : 'bg-nav'}
                        onClick={()=>handleSetActive('projects')} 
                         to='projects'  duration={500} offset={-100}>Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        
                        className={activeLink === 'experience' ? 'bg-nav active' : 'bg-nav'}
                        onClick={()=>handleSetActive('experience')} 
                         to='experience'  duration={500} offset={-100}>Experience</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        
                        className={activeLink === 'education' ? 'bg-nav active' : 'bg-nav'}
                        onClick={()=>handleSetActive('education')} 
                         to='education'  duration={500} offset={-100}>Education</ScrollLink>
                    </li>
                    </ul>
            </nav>

        </div>
    )
}
