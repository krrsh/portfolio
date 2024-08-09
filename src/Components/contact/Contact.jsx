import React from "react";
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1>Contact</h1>
      <form action="https://formsubmit.co/9a4950c9bcbcaa84458edd7601c7ba6b" method="POST" className={styles.form}>
        <label htmlFor="name"><input name="Name" type="text" placeholder="Name" required /></label>
        <label htmlFor="email"><input name="Email" type="text" placeholder="Email" required/></label>
        <label htmlFor="message"><textarea name="Message" type="text" placeholder="Message" required></textarea></label>
        <input type="submit" />
      </form>
      <hr className={styles.lastline} />
      <h2>gmkrishnaa63@gmail.com</h2>
      <h5>&copy; 2024 Krishnaa G M</h5>
    </section>
  );
};

export default Contact;
