import ContactLeftSec from '../../ContactSecParts/ContactLeftSec/ContactLeftSec'
// import ContactLeftSec from '../../ContactSecParts/ContactLeftSec/ContactLeftSec'

import ContactForm from '../../ContactSecParts/ContactForm/ContactForm'
import './ContactSec.css'
const ContactSec = () => {
  return (
    <div className="contact-us-section">
    <div className=" custom-container contact-us-container ">
        <div className="row d-flex align-items-start">
            <ContactLeftSec />
            <ContactForm  />
        </div>
    </div>
</div>
  )
}

export default ContactSec
