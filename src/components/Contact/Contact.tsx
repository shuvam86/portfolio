import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to discuss a project or just want to say hello? </p>
        <p>Feel free to contact me</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:shubhamguptakmr@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:shubhamguptakmr@gmail.com">
            shubhamguptakmr@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+918698472070">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+918698472070">(+91) 8698472070</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
