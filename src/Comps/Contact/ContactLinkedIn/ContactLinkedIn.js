import './ContactLinkedIn.css'
import linkedin_icon from '../../../images/linkedin_icon.png'

const ContactLinkedIn = () => {
    return (
        <div className="contact-linkedin-div">
            <a className='contact-link' href='https://www.linkedin.com/in/morgan-mepham-b8445b248/' target= '_blank'>
            <img src={linkedin_icon} alt="LinkedIn Icon" className="contact-link-icon" />
            <p className="contact-linkedin-text">LinkedIn</p>
            </a>
        </div>
    );
}
 
export default ContactLinkedIn;