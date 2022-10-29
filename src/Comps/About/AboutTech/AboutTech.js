import './AboutTech.css'
import html_icon from '../../../images/html_icon.png'
import css_icon from '../../../images/css_icon.png'
import js_icon from '../../../images/js_icon.png'
import react_icon from '../../../images/react_icon.png'
import jest_icon from '../../../images/jest_icon.png'
import redux_icon from '../../../images/redux_icon.png'
import github_icon from '../../../images/github_icon.png'
import mocha_icon from '../../../images/mocha_icon.png'
import chartjs_icon from '../../../images/chartjs_icon.png'

const AboutTech = () => {
    return (
        <div className="about-tech-div">
            <h3 className="about-tech-title">Technologies</h3>

            <div className="about-tech-item">
                <img src={js_icon} alt="JavaScript Icon" className="tech-item-img" />
                <p className="tech-item-text">Javascript</p>
            </div>

            <div className="about-tech-item">
                <img src={react_icon} alt="React Icon" className="tech-item-img" />
                <p className="tech-item-text">React</p>
            </div>

            <div className="about-tech-item">
                <img src={jest_icon} alt="Jest Icon" className="tech-item-img" />
                <p className="tech-item-text">Jest</p>
            </div>

            <div className="about-tech-item">
                <img src={github_icon} alt="Github Icon" className="tech-item-img" />
                <p className="tech-item-text">Git/Github</p>
            </div>

            <div className="about-tech-item">
                <img src={redux_icon} alt="Redux Icon" className="tech-item-img" />
                <p className="tech-item-text">Redux</p>
            </div>


            <div className="about-tech-item">
                <img src={css_icon} alt="CSS Icon" className="tech-item-img" />
                <p className="tech-item-text">CSS</p>
            </div>

            <div className="about-tech-item">
                <img src={html_icon} alt="HTML Icon" className="tech-item-img" />
                <p className="tech-item-text">HTML</p>
            </div>

            <div className="about-tech-item">
                <img src={mocha_icon} alt="Mocha Icon" className="tech-item-img" />
                <p className="tech-item-text">Mocha JS</p>
            </div>

            <div className="about-tech-item">
                <img src={chartjs_icon} alt="Chart JS Icon" className="tech-item-img" />
                <p className="tech-item-text">Chart JS</p>
            </div>
        </div>
    );
}
 
export default AboutTech;