import styles from "./Contact.module.css";
import Map from "../../components/Map/Map";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <div>
      <ContactInfo />
      <Map />
    </div>
  );
};

export default Contact;
