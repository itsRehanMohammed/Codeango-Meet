import React, { useReducer, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./contact.css";

const Contact = () => {
  const [contactQuery, setcontactQuery] = useState("");
  const [contactEmail, setcontactEmail] = useState("");
  const [modal, setModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setcontactQuery("");
    setcontactEmail("");
    console.log({
      query: data.get("contactQuery"),
      email: data.get("contactEmail"),
    });
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 12000);
  };
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact_wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="customer_query">
              <input onChange={(e) => setcontactQuery(e.target.value)} value={contactQuery} required autoComplete="true" type="text" placeholder="What's your query?" className="contact_Query" id="contactQuery" name="contactQuery" />
            </div>
            <div className="customer_email">
              <input onChange={(e) => setcontactEmail(e.target.value)} value={contactEmail} required autoComplete="true" type="email" placeholder="enter your email " className="contact_email" id="contactEmail" name="contactEmail" />
            </div>
            <button type="submit" className="contact_btn">
              Send{" "}
            </button>
          </form>
          <div className="contact_img">
            <img src="./images/contact.png" alt="" />
          </div>
        </div>

        <div className="contact_details">
          <div className="company_email">
            {" "}
            <h4>Email:</h4> <p>info@codeango.com </p>{" "}
          </div>
          <div className="company_phone">
            {" "}
            <h4>Phone:</h4> <p> +91 99038 07380 </p>
          </div>
          <div className="company_address">
            {" "}
            <h4>Address:</h4> R - 77 Bad ke Ali Aurangabad - 431101
          </div>
        </div>
      </div>
      <div className={modal ? "query_submit_modal modal_active" : "query_submit_modal"}>
        <p>Thank You for contacting us! We will be responding withing 24 hours to the email entered</p>
        <button onClick={() => setModal(false)}>OK</button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
// https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais

//  https://img.freepik.com/free-vector/contact-us-landing-page-illustration_52683-18236.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais
