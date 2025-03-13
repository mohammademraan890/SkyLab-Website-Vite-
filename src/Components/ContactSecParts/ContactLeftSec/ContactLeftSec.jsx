import ContactPageAddress from "../ContactPageAddress/ContactPageAddress";
import "./ContactLeftSec.css";
import SeactionsHeading from "../../Includes/SectionsHeading/SeactionsHeading";
 const ContactLeftSec = () => {
  return (
    <div className="col-md-6 col-sm-12 contact-us-right">
      <SeactionsHeading title="We Ensure You Will Always Get The Best Result" Color="var(--headings-color)" maxWidth="90%" margin="0px 0px 16px 0px" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora
        incidunt atque consectetur ex voluptatum id explicabo, quia dicta
        quisquam excepturi cum fuga architecto consequuntur. Voluptate facere
        aspernatur reprehenderit et!
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit et
        iure molestias harum aliquid velit eius rem at fugiat. Reiciendis!
      </p>
     <ContactPageAddress />
    </div>
  );
};
export default ContactLeftSec
