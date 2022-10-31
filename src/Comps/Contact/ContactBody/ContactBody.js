import ContactInfo from '../ContactInfo/ContactInfo';
import ContactLinkedIn from '../ContactLinkedIn/ContactLinkedIn';
import ContactText from '../ContactText/ContactText';
import './ContactBody.css'

const ContactBody = () => {
    return (
        <div className="contact-body-div">
            <h3 className="contact-body-title">Contact me</h3>
            <ContactInfo />
            <ContactLinkedIn />
            <ContactText />
        </div>
    );
}
 
export default ContactBody;