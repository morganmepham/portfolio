import AboutMain from '../AboutMain/AboutMain';
import AboutSkills from '../AboutSkills/AboutSkills';
import AboutTech from '../AboutTech/AboutTech';
import './AboutBody.css'

const AboutBody = () => {
    return (
        <div className="about-body-div">
            <AboutMain />
            <AboutSkills />
            <AboutTech />
        </div>
    );
}
 
export default AboutBody;