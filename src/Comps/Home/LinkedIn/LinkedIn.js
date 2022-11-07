import './LinkedIn.css'
import linkedin_icon from '../../../images/linkedin_icon.png'

const LinkedIn = () => {
    return ( 
        <div className="linkedin-div">
            <a className='linkedin-link' href='https://www.linkedin.com/in/morgan-mepham/' target= '_blank'>
            <img src={linkedin_icon} alt="LinkedIn Icon" className="linkedin-icon" />
            <p className="linkedin-text">LinkedIn</p>
            </a>
        </div>
    );
}
 
export default LinkedIn;