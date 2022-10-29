import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const [isHomeOpen, setIsHomeOpen] = useState(true)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isProjectsOpen, setIsProjectsOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)


    const resetAll = () => {
        setIsHomeOpen(false)
        setIsAboutOpen(false)
        setIsProjectsOpen(false)
        setIsContactOpen(false)
    }
    const handleHome = () => {
        resetAll()
        setIsHomeOpen(true)
        navigate('/')
    }
    const handleAbout = () => {
        resetAll()
        setIsAboutOpen(true)
        navigate('/about')
    }
    const handleProjects = () => {
        resetAll()
        setIsProjectsOpen(true)
        navigate('/projects')
    }
    const handleContact = () => {
        resetAll()
        setIsContactOpen(true)
        navigate('/contact')
    }
    useEffect(() => {
        if(window.location.pathname === '/'){
            resetAll()
            setIsHomeOpen(true)
        }else if(window.location.pathname === '/about'){
            resetAll()
            setIsAboutOpen(true)
        }else if(window.location.pathname === '/projects'){
            resetAll()
            setIsProjectsOpen(true)
        }else if(window.location.pathname === '/contact'){
            resetAll()
            setIsContactOpen(true)
        }
    })



    return (
        <div className='navbar-div'>
            <nav className="navbar">
                {!isHomeOpen && <span className="nav-home nav-item" onClick={handleHome}>Home</span>}
                {isHomeOpen && <span className="nav-home nav-open" onClick={handleHome}>Home</span>}

                {!isAboutOpen && <span className="nav-about nav-item" onClick={handleAbout}>About</span>}
                {isAboutOpen && <span className="nav-about nav-open" onClick={handleAbout}>About</span>}

                {!isProjectsOpen && <span className="nav-projects nav-item" onClick={handleProjects}>Projects</span>}
                {isProjectsOpen && <span className="nav-projects nav-open" onClick={handleProjects}>Projects</span>}

                {!isContactOpen && <span className="nav-contact nav-item" onClick={handleContact}>Contact</span>}
                {isContactOpen && <span className="nav-contact nav-open" onClick={handleContact}>Contact</span>}
            </nav>
        </div>
    );
}
 
export default Navbar;