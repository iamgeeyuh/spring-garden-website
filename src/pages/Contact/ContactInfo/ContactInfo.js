import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h1>CONTACT US</h1>
      <div>
        <a href="tel:+7189510881">(718) 951 0881</a>
        <a href="tel:+7189510881">(718) 951 0885</a>
      </div>
    </div>
  );
};

export default ContactInfo;
