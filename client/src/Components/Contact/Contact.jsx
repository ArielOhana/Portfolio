import "./Contact.css";
import EmailIcon from "../../assets/EmailIcon.png";
import { useRef } from "react";
import axios from "axios";
function Contact() {
  const postRequest = async (request, data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_LINKSERVER}${request}`,
      data
    );
    return response;
  };
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const sendEmail = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const text = messageRef.current.value;
    postRequest("/data/sendemail", { text, subject, email, name })
      .then((response) => {
        if (response.data.email && response.data.saved)
          alert("Email sent successfully");
        else
          alert("Something went wrong");
      })
      .catch((error) => console.error(error));
  };

  return (
    <footer id="contact" className="Contact-maindiv">
      <div className="Contact-div">
        <span className="Contact-main-title">Contact</span>
        <div className="details-div">
          <img src={EmailIcon} className="emailIcon" alt="" />
          <span className="Contact-title">ArielOhanapc@gmail.com</span>
        </div>
        <div className="inputholder">
          <input
            ref={nameRef}
            type="text"
            className="ContactInput"
            placeholder="Name"
          />
          <input
            ref={emailRef}
            type="email"
            className="ContactInput"
            placeholder="Email"
          />
          <input
            ref={subjectRef}
            type="text"
            className="ContactInput"
            placeholder="Subject"
          />
          <textarea
            ref={messageRef}
            className="ContactInput longerinput"
            placeholder="Message"
          />
          <button onClick={sendEmail} className="SendEmailButton">
            Send
          </button>
        </div>
      </div>
      <span>All rights reserved || Ariel Ohana Portfolio</span>
    </footer>
  );
}

export default Contact;
