import './TopSkills.css'

import html_icon from '../../../images/html_icon.png'
import css_icon from '../../../images/css_icon.png'
import js_icon from '../../../images/js_icon.png'
import react_icon from '../../../images/react_icon.png'
import jest_icon from '../../../images/jest_icon.png'
import redux_icon from '../../../images/redux_icon.png'

const TopSkills = () => {
    return (
        <div className="top-skills-div">
            <h2 className="top-skills-title">Key Skills</h2>

            <div className="skill-js skill-item">
                <img src={js_icon} alt="Javascript Icon" className="skill-img" />
                <span className="skill-text">Javascript</span>
            </div>

            <div className="skill-react skill-item">
                <img src={react_icon} alt="React Icon" className="skill-img" />
                <span className="skill-text">React</span>
            </div>

            <div className="skill-html skill-item">
                <img src={html_icon} alt="HTML5 Icon" className="skill-img" />
                <span className="skill-text">HTML5</span>
            </div>

            <div className="skill-css skill-item">
                <img src={css_icon} alt="CSS3 Icon" className="skill-img" />
                <span className="skill-text">CSS3</span>
            </div>

            <div className="skill-jest skill-item">
                <img src={jest_icon} alt="Jest Icon" className="skill-img" />
                <span className="skill-text">Jest</span>
            </div>

            <div className="skill-redux skill-item">
                <img src={redux_icon} alt="Redux Icon" className="skill-img" />
                <span className="skill-text">Redux</span>
            </div>
        </div>
    );
}
 
export default TopSkills;