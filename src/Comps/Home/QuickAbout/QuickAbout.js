import './QuickAbout.css'    
import aboutme_img from '../../../images/aboutme_img.png'
import { useNavigate } from 'react-router-dom'


const QuickAbout = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <div className="quick-about-div" onClick={handleClick}>
                <img src={aboutme_img} alt="Code Base" className="quick-about-img" />
                <p className="quick-about-text">About</p>
        </div>
    );
}
 
export default QuickAbout;