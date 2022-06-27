import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./sendmessage.css";

export const SendMessage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kjfucba",
        "template_xjsonso",
        form.current,
        "user_VAUL09ZX0AO6lYFPP4VbA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="message-form">
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id="sendbutton" />
    </form>
  );
};

export default SendMessage;
